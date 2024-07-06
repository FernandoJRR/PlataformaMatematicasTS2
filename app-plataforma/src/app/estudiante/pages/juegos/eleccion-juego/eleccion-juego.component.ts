import { Component, OnInit } from '@angular/core';
import { Temario } from '../../../../interfaces/temario.interface';
import { Ejercicio } from '../../../../interfaces/ejercicio';
import { Tema } from '../../../../interfaces/tema.interface';
import { Router } from '@angular/router';
import { TemarioService } from '../../../services/temario.service';

@Component({
  selector: 'app-eleccion-juego',
  templateUrl: './eleccion-juego.component.html',
  styleUrls: ['./eleccion-juego.component.css']
})
export class EleccionJuegoComponent implements OnInit {
  temarios: Temario[] = [];
  temarioChecked: { [titulo: string]: boolean } = {};
  temaChecked: { [tituloTemario: string]: { [tituloTema: string]: boolean } } = {};
  modoJuego!: string;

  constructor(private router: Router, private temarioService: TemarioService) { }

  ngOnInit() {
    //this.loadTemarios();
    this.cargarTemarios();
  }

  // Carga los temarios con datos simulados
  loadTemarios() {
    const jsonTemarios: Temario[] = [
      {
        id: 1,
        titulo: 'Temario1',
        descripcion: 'Descripcion del temario',
        username_creador: 'profesor1',
        fecha_creacion: '2024-07-04T06:00:00.000Z',
        temas: [
          {
            id: 1,
            titulo: 'Tema1 - Temario1',
            descripcion: 'Descripcion del tema',
            id_temario: 1,
            id_tema_previo: null,
            fecha_creacion: '2024-07-04T06:00:00.000Z',
            ejercicios: [
              {
                id: 1,
                id_tipo_ejercicio: 1,
                id_tema: 1,
                id_dificultad: 1,
                anotacion: 'Anotacion para el ejercicio',
                data_json: { pregunta: '¿Cuanto es 1+1?', respuesta: '2' },
                fecha_creacion: '2024-07-04T06:00:00.000Z',
                fecha_modificacion: '2024-07-04T06:00:00.000Z'
              }
            ]
          },
          {
            id: 2,
            titulo: 'Tema2 - Temario1',
            descripcion: 'Descripcion del tema',
            id_temario: 1,
            id_tema_previo: 1,
            fecha_creacion: '2024-07-04T06:00:00.000Z',
            ejercicios: []
          }
        ]
      },
      {
        id: 2,
        titulo: 'Temario2',
        descripcion: 'Descripcion del temario',
        username_creador: 'profesor2',
        fecha_creacion: '2024-07-04T06:00:00.000Z',
        temas: [
          {
            id: 3,
            titulo: 'Tema1 - Temario2',
            descripcion: 'Descripcion del tema',
            id_temario: 2,
            id_tema_previo: null,
            fecha_creacion: '2024-07-04T06:00:00.000Z',
            ejercicios: []
          }
        ]
      }
    ];

    this.temarios = jsonTemarios;
    this.initializeCheckedState();
  }

  // Carga los temarios desde el servicio
  cargarTemarios() {
    this.temarioService.listarTemarios().subscribe({
      next: (response: Object) => {
        this.temarios = response as Temario[];
        this.initializeCheckedState();
      },
      error: (error) => {
        console.error('Error al cargar temarios', error);
        alert(error.error);
      }
    });
  }

  // Inicializa el estado de los checkboxes
  initializeCheckedState() {
    this.temarios.forEach(temario => {
      this.temarioChecked[temario.titulo] = false;
      this.temaChecked[temario.titulo] = {};
      temario.temas.forEach(tema => {
        this.temaChecked[temario.titulo][tema.titulo] = false;
      });
    });
  }

  // Alterna la selección de todos los temas de un temario
  toggleAllThemes(tituloTemario: string, event: any) {
    const checked = event.checked;
    this.temarioChecked[tituloTemario] = checked;
    this.temarios.find(t => t.titulo === tituloTemario)?.temas.forEach(tema => {
      this.temaChecked[tituloTemario][tema.titulo] = checked;
    });
  }

  // Verifica si todos los temas de un temario están seleccionados
  checkTema(tituloTemario: string) {
    const temario = this.temarios.find(t => t.titulo === tituloTemario);
    if (temario) {
      this.temarioChecked[tituloTemario] = temario.temas.every(tema => this.temaChecked[tituloTemario][tema.titulo]);
    }
  }

  // Obtiene los temas seleccionados
  getCheckedTemas(): Tema[] {
    const checkedTemas: Tema[] = [];
    this.temarios.forEach(temario => {
      temario.temas.forEach(tema => {
        if (this.temaChecked[temario.titulo][tema.titulo]) {
          checkedTemas.push(tema);
        }
      });
    });
    return checkedTemas;
  }

  // Método para obtener los detalles completos de los temas seleccionados
  async getEjerciciosDeTemasSeleccionados() {
    const checkedTemas = this.getCheckedTemas();
    const ejercicios: Ejercicio[] = [];

    const temaRequests = checkedTemas.map(tema => {
      if (tema.id !== undefined) {
        return this.temarioService.obtenerTemaConEjercicios(tema.id).toPromise();
      } else {
        return Promise.resolve(null);
      }
    });

    try {
      const temasCompletos = await Promise.all(temaRequests) as Tema[]; // Asegura que los resultados son del tipo `Tema`
      temasCompletos.forEach(temaCompleto => {
        if (temaCompleto && temaCompleto.ejercicios) {
          ejercicios.push(...temaCompleto.ejercicios);
        }
      });
      // Aquí puedes hacer lo que necesites con los ejercicios obtenidos
      this.router.navigate(['/estudiante/juego', { data: JSON.stringify(ejercicios), modo: this.modoJuego }]);
    } catch (error) {
      console.error('Error al obtener los ejercicios de los temas seleccionados', error);
      alert('Ocurrió un error al obtener los ejercicios de los temas seleccionados.');
    }

    return ejercicios; // Retorna los ejercicios, aunque la lista podría no estar completa aún debido a las llamadas asincrónicas
  }

  // Muestra los ejercicios de los temas seleccionados
  mostrarEjerciciosCheckeados() {
    this.getEjerciciosDeTemasSeleccionados();
  }

  // Muestra los temas seleccionados
  mostrarTemasCheckeados() {
    const checkedTemas = this.getCheckedTemas();
    console.log('Temas checkeados:', checkedTemas);
    // Puedes hacer lo que necesites con la lista de temas checkeados
  }
}

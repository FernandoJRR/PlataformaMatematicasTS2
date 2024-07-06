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
  dificultadEjercicio!: number;
  tipoEjercicios: { [key: string]: boolean } = {
    preguntaRespuesta: false,
    unirParejas: false,
    opcionMultiple: false
  };

  constructor(private router: Router, private temarioService: TemarioService) { }

  ngOnInit() {
    //this.loadTemarios();
    this.cargarTemarios();
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
      const temasCompletos = await Promise.all(temaRequests) as Tema[];
      temasCompletos.forEach(temaCompleto => {
        if (temaCompleto && temaCompleto.ejercicios) {
          ejercicios.push(...temaCompleto.ejercicios);
        }
      });
      // Filtrar ejercicios por dificultad y tipo
      const ejerciciosFiltrados = this.filtrarEjercicios(ejercicios);
      // Aquí puedes hacer lo que necesites con los ejercicios obtenidos
      this.router.navigate(['/estudiante/juego', { data: JSON.stringify(ejerciciosFiltrados), modo: this.modoJuego }]);
    } catch (error) {
      console.error('Error al obtener los ejercicios de los temas seleccionados', error);
      alert('Ocurrió un error al obtener los ejercicios de los temas seleccionados.');
    }

    return ejercicios;
  }

  // Filtrar ejercicios por dificultad y tipo
  filtrarEjercicios(ejercicios: Ejercicio[]): Ejercicio[] {
    return ejercicios.filter(ejercicio => {
      const dificultadCoincide = this.dificultadEjercicio ? ejercicio.id_dificultad === this.dificultadEjercicio : true;
      const tipoCoincide = (this.tipoEjercicios['preguntaRespuesta'] && ejercicio.id_tipo_ejercicio === 1) ||
                           (this.tipoEjercicios['unirParejas'] && ejercicio.id_tipo_ejercicio === 2) ||
                           (this.tipoEjercicios['opcionMultiple'] && ejercicio.id_tipo_ejercicio === 3);

      return dificultadCoincide && tipoCoincide;
    });
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

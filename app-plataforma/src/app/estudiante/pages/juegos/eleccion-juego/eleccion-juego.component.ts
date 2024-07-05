import { Component } from '@angular/core';
import { Temario } from '../../../../interfaces/temario.interface';
import { Ejercicio } from '../../../../interfaces/ejercicio';
import { Tema } from '../../../../interfaces/tema.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eleccion-juego',
  templateUrl: './eleccion-juego.component.html',
  styleUrl: './eleccion-juego.component.css'
})
export class EleccionJuegoComponent {
  
  temarios: Temario[] = [];
  temarioChecked: { [titulo: string]: boolean } = {};
  temaChecked: { [tituloTemario: string]: { [tituloTema: string]: boolean } } = {};
  modoJuego!:string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.loadTemarios();
  }

  loadTemarios() {
    const jsonTemarios: Temario[] = [
      {
        "id": 1,
        "titulo": "Temario1",
        "descripcion": "Descripcion del temario",
        "username_creador": "profesor1",
        "fecha_creacion": "2024-07-04T06:00:00.000Z",
        "temas": [
          {
            "id": 1,
            "titulo": "Tema1 - Temario1",
            "descripcion": "Descripcion del tema",
            "id_temario": 1,
            "id_tema_previo": null,
            "fecha_creacion": "2024-07-04T06:00:00.000Z",
            "ejercicios": [
              {
                "id": 1,
                "id_tipo_ejercicio": 1,
                "id_tema": 1,
                "id_dificultad": 1,
                "anotacion": "Anotacion para el ejercicio",
                "data_json": {pregunta: '¿Cuanto es 1+1?', respuesta: '2'},
                "fecha_creacion": "2024-07-04T06:00:00.000Z",
                "fecha_modificacion": "2024-07-04T06:00:00.000Z"
              }
            ]
          },
          {
            "id": 2,
            "titulo": "Tema2 - Temario1",
            "descripcion": "Descripcion del tema",
            "id_temario": 1,
            "id_tema_previo": 1,
            "fecha_creacion": "2024-07-04T06:00:00.000Z",
            "ejercicios": [
              {
                "id": 2,
                "id_tipo_ejercicio": 1,
                "id_tema": 2,
                "id_dificultad": 3,
                "anotacion": "Anotacion para el ejercicio",
                "data_json": {pregunta: '¿Cuál es el animal que dice miu?', respuesta: 'Gato' },
                "fecha_creacion": "2024-07-04T06:00:00.000Z",
                "fecha_modificacion": "2024-07-04T06:00:00.000Z"
              },
              {
                "id": 3,
                "id_tipo_ejercicio": 1,
                "id_tema": 2,
                "id_dificultad": 3,
                "anotacion": "Anotacion para el ejercicio",
                "data_json": {pregunta: '¿Cuál es el animal que dice guau?', respuesta: 'perro' },
                "fecha_creacion": "2024-07-04T06:00:00.000Z",
                "fecha_modificacion": "2024-07-04T06:00:00.000Z"
              }
            ]
          }
        ]
      }
    ];

    this.temarios = jsonTemarios;
    this.initializeCheckedState();
  }

  initializeCheckedState() {
    this.temarios.forEach(temario => {
      this.temarioChecked[temario.titulo] = false;
      this.temaChecked[temario.titulo] = {};
      temario.temas.forEach(tema => {
        this.temaChecked[temario.titulo][tema.titulo] = false;
      });
    });
  }

  toggleAllThemes(tituloTemario: string, event: any) {
    const checked = event.checked;
    this.temarioChecked[tituloTemario] = checked;
    this.temarios.find(t => t.titulo === tituloTemario)?.temas.forEach(tema => {
      this.temaChecked[tituloTemario][tema.titulo] = checked;
    });
  }

  checkTema(tituloTemario: string) {
    const temario = this.temarios.find(t => t.titulo === tituloTemario);
    if (temario) {
      this.temarioChecked[tituloTemario] = temario.temas.every(tema => this.temaChecked[tituloTemario][tema.titulo]);
    }
  }

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

  getEjerciciosDeTemasSeleccionados(): Ejercicio[] {
    const checkedTemas = this.getCheckedTemas();
    const ejercicios: Ejercicio[] = [];
    checkedTemas.forEach(tema => {
      ejercicios.push(...tema.ejercicios);
    });
    return ejercicios;
  }
  
  mostrarEjerciciosCheckeados() {
    const ejercicios = this.getEjerciciosDeTemasSeleccionados();
    console.log('Ejercicios checkeados:', ejercicios);
    // Puedes pasar estos ejercicios a otro componente según lo necesites
    this.router.navigate(['/estudiante/juego', { data: JSON.stringify(this.getEjerciciosDeTemasSeleccionados()) , modo: this.modoJuego }]);
  }



  mostrarTemasCheckeados() {
    const checkedTemas = this.getCheckedTemas();
    console.log('Temas checkeados:', checkedTemas);
    // Puedes hacer lo que necesites con la lista de temas checkeados
    
  }

  
  


  /*
  temario1Checked = false;
  temario2Checked = false;
  temas1 = [
    { name: 'Tema 1', checked: false },
    { name: 'Tema 2', checked: false },
    { name: 'Tema 3', checked: false }
  ];
  temas2 = [
    { name: 'Tema 1', checked: false },
    { name: 'Tema 2', checked: false },
    { name: 'Tema 3', checked: false }
  ];

  toggleAllThemes(temario: string, event: any) {
    const checked = event.checked;
    if (temario === 'temario1') {
      this.temario1Checked = checked;
      this.temas1.forEach(tema => tema.checked = checked);
    } else if (temario === 'temario2') {
      this.temario2Checked = checked;
      this.temas2.forEach(tema => tema.checked = checked);
    }
  }

  checkTema(temario: string) {
    if (temario === 'temario1') {
      this.temario1Checked = this.temas1.every(tema => tema.checked);
    } else if (temario === 'temario2') {
      this.temario2Checked = this.temas2.every(tema => tema.checked);
    }
  }*/

}

import { Component, Input, OnInit } from '@angular/core';
import { Ejercicio } from '../../../../interfaces/ejercicio';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  @Input() ejercicios: Ejercicio[] = [];
  currentEjercicioIndex: number = 0;

  ngOnInit() {
    // Usar datos simulados si no se proporcionan ejercicios
    if (!this.ejercicios || this.ejercicios.length === 0) {
      this.ejercicios = [
        {
          id_tipo_ejercicio: 1,
          id_dificultad: 1,
          anotacion: 'Primera pregunta',
          id_tema: 0,
          data_json: { pregunta: '¿Cuál es la capital de Francia?', respuesta: 'París' },
          fecha_creacion: new Date().toISOString(),
          fecha_modificacion: new Date().toISOString()
        },
        {
          id_tipo_ejercicio: 1,
          id_dificultad: 1,
          anotacion: 'Segunda pregunta',
          id_tema: 0,
          data_json: { pregunta: '¿Cuál es el río más largo del mundo?', respuesta: 'Nilo' },
          fecha_creacion: new Date().toISOString(),
          fecha_modificacion: new Date().toISOString()
        },
        {
          id_tipo_ejercicio: 2,
          id_dificultad: 1,
          anotacion: 'Unir parejas',
          id_tema: 0,
          data_json: {
            parejasIzquierda: ['Suma', 'El orden de los factores no afecta el producto', '7x11+3'],
            parejasDerecha: ['Adicion', 'Multiplicacion', '70.']
          },
          fecha_creacion: new Date().toISOString(),
          fecha_modificacion: new Date().toISOString()
        },
        {
          id_tipo_ejercicio: 3,
          id_dificultad: 1,
          anotacion: 'Opción múltiple',
          id_tema: 0,
          data_json: {
            pregunta: '¿Cuál es el océano más grande del mundo?',
            opciones: ['Océano Atlántico', 'Océano Índico', 'Océano Pacífico', 'Océano Ártico'],
            respuestaCorrecta: 'Océano Pacífico'
          },
          fecha_creacion: new Date().toISOString(),
          fecha_modificacion: new Date().toISOString()
        }
      ];
    }

    console.log('Ejercicios inicializados:', this.ejercicios);
  }

  get currentEjercicio(): Ejercicio | null {
    return this.ejercicios.length > 0 ? this.ejercicios[this.currentEjercicioIndex] : null;
  }

  siguienteEjercicio() {
    if (this.currentEjercicioIndex < this.ejercicios.length - 1) {
      this.currentEjercicioIndex++;
    } else {
      alert('Juego completado!');
    }
  }

  anteriorEjercicio() {
    if (this.currentEjercicioIndex > 0) {
      this.currentEjercicioIndex--;
    }
  }
}

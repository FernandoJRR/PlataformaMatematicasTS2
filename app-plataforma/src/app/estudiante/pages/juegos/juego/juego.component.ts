import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Ejercicio } from '../../../../interfaces/ejercicio';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit, OnDestroy {
  @Input() ejercicios: Ejercicio[] = [];
  currentEjercicioIndex: number = 0;
  tiempoRestante: number = 0; // Tiempo calculado en segundos
  interval: any;
  juegoIniciado: boolean = false;
  modoContrarreloj: boolean = false;
  modoSeleccionado: string = 'normal';
  correctas: number = 0;
  incorrectas: number = 0;
  puntaje: number = 0;

  ngOnInit() {
    // Usar datos simulados si no se proporcionan ejercicios
    if (!this.ejercicios || this.ejercicios.length === 0) {
      this.ejercicios = this.generarDatosSimulados();
    }
    this.calcularTiempoTotal();
  }

  iniciarJuego() {
    this.juegoIniciado = true;

    if (this.modoSeleccionado === 'contrarreloj') {
      this.modoContrarreloj = true;
      this.iniciarTemporizador();
    } else {
      this.modoContrarreloj = false;
    }
  }

  calcularTiempoTotal() {
    this.tiempoRestante = this.ejercicios.reduce((acc, ejercicio) => {
      if (ejercicio.id_tipo_ejercicio === 1 ) {
        return acc + 8;
      }else if (ejercicio.id_tipo_ejercicio === 3) {
        return acc + 4;
      } else if (ejercicio.id_tipo_ejercicio === 2) {
        return acc + 13;
      }
      return acc;
    }, 0);
  }

  get currentEjercicio(): Ejercicio | null {
    return this.ejercicios.length > 0 ? this.ejercicios[this.currentEjercicioIndex] : null;
  }

  siguienteEjercicio(event?: { correcta: boolean }) {
    if (event) {
      if (event.correcta) {
        this.correctas++;
      } else {
        this.incorrectas++;
      }
    }
    if (this.currentEjercicioIndex < this.ejercicios.length - 1) {
      this.currentEjercicioIndex++;
    } else {
      alert('¡Juego completado!');
      this.detenerTemporizador();
      this.mostrarResultados();
    }
  }

  anteriorEjercicio() {
    if (this.currentEjercicioIndex > 0) {
      this.currentEjercicioIndex--;
    }
  }

  iniciarTemporizador() {
    this.interval = setInterval(() => {
      if (this.tiempoRestante > 0) {
        this.tiempoRestante--;
      } else {
        this.detenerTemporizador();
        alert('¡Se acabó el tiempo!');
        this.mostrarResultados();
      }
    }, 1000);
  }

  detenerTemporizador() {
    clearInterval(this.interval);
  }

  ngOnDestroy() {
    this.detenerTemporizador();
  }

  generarDatosSimulados(): Ejercicio[] {
    return [
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
          parejasIzquierda: ['Fuente', 'Estuario', 'Tributario'],
          parejasDerecha: ['Toda el área drenada por un río.', 'Escurrimiento de aguas en una red hidrográfica.', 'Lugar donde comienza un río.']
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

  mostrarResultados() {
    const totalPreguntas = this.ejercicios.length;
    this.puntaje = Math.round((this.correctas / totalPreguntas) * 100);
    alert(`Resultados:
      Respuestas correctas: ${this.correctas}
      Respuestas incorrectas: ${this.incorrectas}
      Puntaje: ${this.puntaje}/100`);
  }
}

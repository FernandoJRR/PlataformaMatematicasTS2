import { Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Ejercicio } from '../../../../interfaces/ejercicio';

@Component({
  selector: 'app-juego-pregunta-respuesta',
  templateUrl: './juego-pregunta-respuesta.component.html',
  styleUrl: './juego-pregunta-respuesta.component.css'
})
export class JuegoPreguntaRespuestaComponent {
  @Input() ejercicio!: Ejercicio;
  @Output() next = new EventEmitter<{ correcta: boolean }>();

  pregunta: string = '';
  respuestaCorrecta: string = '';
  respuestaUsuario: string = '';

  ngOnInit() {
    this.actualizarEjercicio();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['ejercicio']) {
      this.actualizarEjercicio();
    }
  }

  actualizarEjercicio() {
    if (this.ejercicio.data_json) {
      this.pregunta = this.ejercicio.data_json.pregunta;
      this.respuestaCorrecta = this.ejercicio.data_json.respuesta;
      this.respuestaUsuario = ''; // Limpiar el campo de entrada
    }
  }

  verificarRespuesta() {
    const correcta = this.respuestaUsuario.trim().toLowerCase() === this.respuestaCorrecta.trim().toLowerCase();
    if (correcta) {
      alert('¡Respuesta correcta!');
    } else {
      alert('Respuesta incorrecta. La respuesta correcta es: ' + this.respuestaCorrecta);
    }
    this.next.emit({ correcta });
  }

  }

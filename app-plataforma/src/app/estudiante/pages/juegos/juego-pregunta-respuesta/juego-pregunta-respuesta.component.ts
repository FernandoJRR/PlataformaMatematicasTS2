import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Ejercicio } from '../../../../interfaces/ejercicio';

@Component({
  selector: 'app-juego-pregunta-respuesta',
  templateUrl: './juego-pregunta-respuesta.component.html',
  styleUrl: './juego-pregunta-respuesta.component.css'
})
export class JuegoPreguntaRespuestaComponent {

  @Input() ejercicio!: Ejercicio;
  @Output() next = new EventEmitter<void>();
  @ViewChild('respuestaInput') respuestaInput!: ElementRef;

  respuesta: string = '';

  verificarRespuesta() {
    if (this.respuesta.toLowerCase() === this.ejercicio.data_json.respuesta.toLowerCase()) {
      alert('Respuesta correcta!');
    } else {
      alert('Respuesta incorrecta!');
    }
    this.respuesta = '';
    this.next.emit();
    this.respuestaInput.nativeElement.focus(); // Enfocar el input después de verificar la respuesta
  }
}

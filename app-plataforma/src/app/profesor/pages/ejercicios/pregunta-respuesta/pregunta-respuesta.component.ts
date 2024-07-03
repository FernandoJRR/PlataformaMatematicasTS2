import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta-respuesta',
  templateUrl: './pregunta-respuesta.component.html',
  styleUrl: './pregunta-respuesta.component.css'
})
export class PreguntaRespuestaComponent {
  pregunta: string = '';
  respuesta: string = '';

}

import { Component, Input } from '@angular/core';

let json;
@Component({
  selector: 'app-opcion-multiple',
  templateUrl: './opcion-multiple.component.html',
  styleUrls: ['./opcion-multiple.component.css'],
})
export class OpcionMultipleComponent {
  pregunta: string = '';
  opciones: string[] = ['', '', '', ''];
  respuestaCorrecta: number = 0;
 
  agregarOpcion(index: number, valor: string) {
    this.opciones[index] = valor;
  }

  seleccionarRespuesta(index: number) {
    this.respuestaCorrecta = index;
  }
}
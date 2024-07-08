import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ejercicio } from '../../../../interfaces/ejercicio';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-juego-opcion-multiple',
  templateUrl: './juego-opcion-multiple.component.html',
  styleUrl: './juego-opcion-multiple.component.css'
})
export class JuegoOpcionMultipleComponent {
  @Input() ejercicio!: Ejercicio;
  @Input() correctas!: number;
  @Output() next = new EventEmitter<{ correcta: boolean }>();

  pregunta: string = '';
  opciones: string[] = [];
  respuestaCorrecta: string = '';
  respuestaSeleccionada: string | null = null;
  colores: string[] = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50'];
  constructor(private juegoService:JuegoService){}
  ngOnInit() {
    if (this.ejercicio.data_json) {
      this.pregunta = this.ejercicio.data_json.pregunta;
      this.opciones = this.shuffleArray([...this.ejercicio.data_json.opciones]);
      this.respuestaCorrecta = this.ejercicio.data_json.respuestaCorrecta;
    }
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  seleccionarRespuesta(opcion: string) {
    this.respuestaSeleccionada = opcion;
    this.verificarRespuesta();
  }

  verificarRespuesta() {
    const correcta = this.respuestaSeleccionada === this.respuestaCorrecta;
    if (this.ejercicio.id) {
      if (correcta) {
        alert('¡Respuesta correcta!');
        this.juegoService.incrementarCorrectas(this.ejercicio.id);
      } else {
        alert('Respuesta incorrecta. La respuesta correcta es: ' + this.respuestaCorrecta);
        this.juegoService.incrementarIncorrectas(this.ejercicio.id);
      }
      
    }
    
    this.respuestaSeleccionada = null;
    console.log('Evento emitido desde JuegoOpcionMultipleComponent:', { correcta }); // Añadir traza
    this.next.emit({ correcta });
    this.correctas++;
  }

  getColor(index: number): string {
    return this.colores[index % this.colores.length];
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ejercicio } from '../../../interfaces/ejercicio';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrl: './ejercicio.component.css'
})
export class EjercicioComponent {
  @Input() ejercicio!: Ejercicio;
  @Input() index!: number;
  tipoEjercicio: string = '';
  ejercicioJson!:{pregunta: string, respuesta: string};

  seleccionarTipo(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.tipoEjercicio = selectElement.value;
  }

}

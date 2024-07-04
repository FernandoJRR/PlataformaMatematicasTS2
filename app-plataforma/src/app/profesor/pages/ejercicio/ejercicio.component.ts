import { Component, Input } from '@angular/core';
import { Ejercicio } from '../../../interfaces/ejercicio';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css']
})
export class EjercicioComponent {
  @Input() ejercicio!: Ejercicio;
  @Input() index!: number;
  tipoEjercicio: string = '';
  ejercicioJson: { pregunta: string, respuesta: string } = { pregunta: '', respuesta: '' }; // Inicialización del objeto

  seleccionarTipo(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.tipoEjercicio = selectElement.value;
  }
}

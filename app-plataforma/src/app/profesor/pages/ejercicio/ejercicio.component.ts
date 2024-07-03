import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrl: './ejercicio.component.css'
})
export class EjercicioComponent {
  tipoEjercicio: string = '';

  seleccionarTipo(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.tipoEjercicio = selectElement.value;
  }

}

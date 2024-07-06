import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ejercicio } from '../../../interfaces/ejercicio';
import { Tema } from '../../../interfaces/tema.interface';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css'],
})
export class EjercicioComponent {
  @Input() ejercicio!: Ejercicio;
  @Input() index!: number;
  @Output() eliminarEjercicioEvent = new EventEmitter<void>();

  id_dificultad!: number;
  tipoEjercicio: string = '';
  anotacion?: string;
  ejercicioJson: { pregunta: string; respuesta: string } = {
    pregunta: '',
    respuesta: '',
  };

  //Funcion para eliminar el Ejercicio del Tema
  eliminarEjercicio() {
    this.eliminarEjercicioEvent.emit();
  }

  /* PROBAR ESTO */
  //Metodo que selecciona la dificultad
  seleccionarDificultad(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.id_dificultad = parseInt(selectElement.value);
    this.ejercicio.id_dificultad = this.id_dificultad; //eliminar "ejercicio"
  }

  //Metodo que selecciona Tipo de Ejercicio
  seleccionarTipo(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.tipoEjercicio = selectElement.value;

    switch (this.tipoEjercicio) {
      case 'pregunta-respuesta':
        this.ejercicio.id_tipo_ejercicio = 1;
        break;

      case 'unir-parejas':
        this.ejercicio.id_tipo_ejercicio = 2;
        break;

      case 'opcion-multiple':
        this.ejercicio.id_tipo_ejercicio = 3;
        break;
    }
  }
}

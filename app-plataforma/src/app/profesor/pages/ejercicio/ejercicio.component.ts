import { Component, Input } from '@angular/core';
import { Ejercicio } from '../../../interfaces/ejercicio';
import { Tema } from '../../../interfaces/tema.interface';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css']
})
export class EjercicioComponent {
  @Input() tema!: Tema;
  @Input() index!: number;
  tipoEjercicio: string = '';
  
  ngOnInit(){
    this.tema.ejercicios[this.index]
  }


  seleccionarTipo(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.tipoEjercicio = selectElement.value;
  }
}

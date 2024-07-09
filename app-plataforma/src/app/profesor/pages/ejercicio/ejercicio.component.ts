import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ejercicio } from '../../../interfaces/ejercicio';
import { Tema } from '../../../interfaces/tema.interface';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css'],
})
export class EjercicioComponent {
  @Input() tema!: Tema;
  @Input() index!: number;
  @Output() eliminarEjercicioEvent = new EventEmitter<void>();

  tipoEjercicio: string = '';
  newEj!: Ejercicio;


  //Constructor
  constructor(){
    this.newEj = {
      id_tipo_ejercicio: -1,
      id_tema: -1,
      id_dificultad: -1,
      anotacion: '',
      data_json: "",
      fecha_creacion: new Date().toISOString(),
      fecha_modificacion: new Date().toISOString(),
    };
  }

  //Funcion que agregar
  ngOnInit() {
    this.tema.ejercicios[this.index]; //ERROR EN CONSOLA DEL BROWSER
  }

  //Funcion para eliminar el Ejercicio del Tema
  eliminarEjercicio() {
    this.eliminarEjercicioEvent.emit();
  }

  //Metodo que selecciona la dificultad
  seleccionarDificultad(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.newEj.id_dificultad =  parseInt(
      selectElement.value
    );
  }

  //Metodo que selecciona Tipo de Ejercicio
  seleccionarTipo(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.tipoEjercicio = selectElement.value;

    switch (this.tipoEjercicio) {
      case 'pregunta-respuesta':
        this.newEj.id_tipo_ejercicio = 1;
        break;

      case 'unir-parejas':
        this.newEj.id_tipo_ejercicio = 2;
        break;

      case 'opcion-multiple':
        this.newEj.id_tipo_ejercicio = 3;
        break;
    }
  }
}
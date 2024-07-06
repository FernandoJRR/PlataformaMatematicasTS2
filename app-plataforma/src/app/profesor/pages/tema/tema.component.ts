import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ejercicio } from '../../../interfaces/ejercicio';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent {
  @Input() tema!: { titulo: string; descripcion: string; ejercicios: Ejercicio[] };
  @Input() index!: number;
  @Output() eliminarTemaEvent = new EventEmitter<number>();

  mostrarEjercicio: boolean = false;
  ejercicios!: Ejercicio[];


  //Funcion para eliminar tema del temario
  eliminarTema() {
    this.eliminarTemaEvent.emit(this.index);
  }

  //Funcion que agrega un Ejercicio al Tema
  agregarEjercicio() {
    const nuevoEjercicio: Ejercicio = {
      id_tipo_ejercicio: 0,
      id_dificultad: 1,
      anotacion: '',
      id_tema: 0,
      data_json: { pregunta: '', respuesta: '' },
      fecha_creacion: new Date().toISOString(),
      fecha_modificacion: new Date().toISOString()
    };
    this.tema.ejercicios.push(nuevoEjercicio);
  }

  //FUncion para mostrar el Ejericcio
  mostrarEjercicioComponent() {
    this.mostrarEjercicio = true;
    this.agregarEjercicio();
  }

  //Funcion para eliminar un ejercicio del Tema
  eliminarEjercicio(index: number) {
    this.tema.ejercicios.splice(index, 1);
    if (this.tema.ejercicios.length === 0) {
      this.mostrarEjercicio = false;
    }
  }
}

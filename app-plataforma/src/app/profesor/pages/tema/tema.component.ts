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
  @Output() eliminar = new EventEmitter<number>();
  mostrarEjercicio: boolean = false;
  ejercicio!: Ejercicio;
  ejercicios!: Ejercicio[];

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
    this.ejercicio = nuevoEjercicio;
    //this.ejercicios.push(nuevoEjercicio);
  }

  mostrarEjercicioComponent() {
    this.mostrarEjercicio = true;
    this.agregarEjercicio();
  }

  ocultarEjercicioComponent() {
    this.mostrarEjercicio = false;
  }
}
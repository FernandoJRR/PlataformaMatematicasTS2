import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ejercicio } from '../../../interfaces/ejercicio';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrl: './tema.component.css'
})
export class TemaComponent {
  @Input() tema!: { titulo: string; descripcion: string; ejercicios:Ejercicio[] } ;
  @Input() index!: number;
  @Output() eliminar = new EventEmitter<number>();
  mostrarEjercicio: boolean = false;


  ejercicios: Ejercicio[] = [];

  eliminarTema() {
    this.eliminar.emit(this.index);
  }

  agregarTema(){

  }

  mostrarEjercicioComponent() {
    this.mostrarEjercicio = true;
    this.agregarEjercio();
  }

  ocultarEjercicioComponent() {
    this.mostrarEjercicio = false;
  }

  agregarEjercio() {
    const nuevoEjercicio: Ejercicio = {
      id_tipo_ejercicio: 0,
      id_dificultad: 1,
      anotacion: "",
      id_tema: 0,   
      data_json: JSON, 
      fecha_creacion: new Date().toISOString(),
      fecha_modificacion: new Date().toISOString()
    };
    this.ejercicios.push(nuevoEjercicio);
    //this.tema.ejercicios=this.ejercicios;
    
  }

}

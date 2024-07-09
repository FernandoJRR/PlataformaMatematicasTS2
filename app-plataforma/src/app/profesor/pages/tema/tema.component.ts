import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ejercicio } from '../../../interfaces/ejercicio';
import { Tema } from '../../../interfaces/tema.interface';
import { Temario } from '../../../interfaces/temario.interface';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css'],
})
export class TemaComponent {
  @Input() tema!: Temario; //TEMARIO no seas mula
  @Input() index!: number;
  @Output() eliminarTemaEvent = new EventEmitter<number>();

  mostrarEjercicio: boolean = false;
  ejercicio!: Ejercicio;
  titulo!: string;
  descripcion!: string;
  newtema!: Tema;

  //Constructor
  constructor() {}

  //
  ngOnInit() {
    this.newtema = this.tema.temas[this.index];
  }

  //Funcion para eliminar tema del temario
  eliminarTema() {
    this.eliminarTemaEvent.emit(this.index);
  }

  //FUncion para mostrar el Ejericcio
  mostrarEjercicioComponent() {
    this.mostrarEjercicio = true;
    this.agregarEjercicio();
  }

  //Funcion que agrega un Ejercicio al Tema
  agregarEjercicio() {
    this.newtema.titulo = this.titulo;
    this.newtema.descripcion = this.descripcion;
    this.newtema.ejercicios.push(this.ejercicio);
  }

  //Funcion para eliminar un ejercicio del Tema
  eliminarEjercicio(index: number) {
    this.tema.temas[this.index].ejercicios.splice(index, 1);
    if (this.tema.temas[this.index].ejercicios.length === 0) {
      this.mostrarEjercicio = false;
    }
  }
}
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ejercicio } from '../../../interfaces/ejercicio';
import { Tema } from '../../../interfaces/tema.interface';
import { Temario } from '../../../interfaces/temario.interface';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent {
  @Input() tema!:Temario;
  @Input() index!: number;
  @Output() eliminar = new EventEmitter<number>();
  mostrarEjercicio: boolean = false;
  ejercicio!: Ejercicio;
  titulo!:string;
  descripcion!:string;
  newtema!:Tema;

  constructor(){
    
  }
  ngOnInit(){
   this.newtema = this.tema.temas[this.index];
  }

  agregarEjercicio() {
    this.newtema.titulo = this.titulo;
    this.newtema.descripcion = this.descripcion;
    this.newtema.ejercicios.push(this.ejercicio)
  }

  mostrarEjercicioComponent() {
    this.mostrarEjercicio = true;
    this.agregarEjercicio();
  }

  ocultarEjercicioComponent() {
    this.mostrarEjercicio = false;
  }
}

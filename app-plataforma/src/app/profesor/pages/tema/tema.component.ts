import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrl: './tema.component.css'
})
export class TemaComponent {
  @Input() tema!: { titulo: string; descripcion: string; } ;
  @Input() index!: number;
  @Output() eliminar = new EventEmitter<number>();
  mostrarEjercicio: boolean = false;

  eliminarTema() {
    this.eliminar.emit(this.index);
  }

  agregarTema(){

  }

  mostrarEjercicioComponent() {
    this.mostrarEjercicio = true;
  }

  ocultarEjercicioComponent() {
    this.mostrarEjercicio = false;
  }

}

import { Component, Input } from '@angular/core';
import { Tema } from '../../../../interfaces/tema.interface';
import { Ejercicio } from '../../../../interfaces/ejercicio';

@Component({
  selector: 'app-unir-parejas',
  templateUrl: './unir-parejas.component.html',
  styleUrl: './unir-parejas.component.css'
})
export class UnirParejasComponent {
  @Input() tema!:Tema;
  parejas: Array<{ izquierda: string, derecha: string }> = [{ izquierda: '', derecha: '' }];
  json = {datos:this.parejas}
  
  newEj!:Ejercicio
  constructor(){
    this.newEj = {
      id_tipo_ejercicio:1,
      id_tema:0,
      id_dificultad:1,
      anotacion:'nuevo ejercicio',   
      data_json: this.json, 
      fecha_creacion: new Date().toISOString(),
      fecha_modificacion: new Date().toISOString()
    }
  }
  ngOnInit() {
    this.tema.ejercicios.push(this.newEj)
  }

  agregarPareja() {

    this.parejas.push({ izquierda: '', derecha: '' });
  }

  eliminarPareja(index: number) {
    this.parejas.splice(index, 1);
  }

  actualizarPareja(index: number, lado: 'izquierda' | 'derecha', valor: string) {
    this.parejas[index][lado] = valor;
  }

}

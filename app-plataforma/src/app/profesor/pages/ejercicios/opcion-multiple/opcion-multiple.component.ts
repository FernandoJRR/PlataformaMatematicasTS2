import { Component, Input } from '@angular/core';
import { Ejercicio } from '../../../../interfaces/ejercicio';
import { Tema } from '../../../../interfaces/tema.interface';

let json;
@Component({
  selector: 'app-opcion-multiple',
  templateUrl: './opcion-multiple.component.html',
  styleUrls: ['./opcion-multiple.component.css']
})
export class OpcionMultipleComponent {
  @Input() tema!:Tema;
  json = {pregunta:'',opciones:['', '', '', ''],correcto:1}
  
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

  agregarOpcion(index: number, valor: string) {
    this.json.opciones[index] = valor;
  }

  seleccionarRespuesta(index: number) {
    this.json.correcto = index;
  }

  
}



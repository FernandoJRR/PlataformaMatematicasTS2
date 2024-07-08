import { Component, Input } from '@angular/core';
import { Ejercicio } from '../../../../interfaces/ejercicio';
import { Tema } from '../../../../interfaces/tema.interface';

let json;
@Component({
  selector: 'app-opcion-multiple',
  templateUrl: './opcion-multiple.component.html',
  styleUrls: ['./opcion-multiple.component.css'],
})
export class OpcionMultipleComponent {
  @Input() tema!: Tema;
  @Input() newEj!: Ejercicio;
  json = { pregunta: '', opciones: ['', '', '', ''], correcto: 1 };

  //Funcion que agrega el ejercicioOpcion-Multiple a la lista de Ejercicios del Tema
  ngOnInit() {
    this.newEj.data_json = this.json
    this.tema.ejercicios.push(this.newEj); //ERROR EN CONSOLA DEL BROWSER
  }

  //Constructor
  constructor() {
  }

  agregarOpcion(index: number, valor: string) {
    this.json.opciones[index] = valor;
  }

  seleccionarRespuesta(index: number) {
    this.json.correcto = index;
  }
}

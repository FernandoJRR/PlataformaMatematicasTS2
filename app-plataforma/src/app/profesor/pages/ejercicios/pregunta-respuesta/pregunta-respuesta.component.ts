import { Component, Input } from '@angular/core';
import { Ejercicio } from '../../../../interfaces/ejercicio';
import { Tema } from '../../../../interfaces/tema.interface';

@Component({
  selector: 'app-pregunta-respuesta',
  templateUrl: './pregunta-respuesta.component.html',
  styleUrls: ['./pregunta-respuesta.component.css'],
})
export class PreguntaRespuestaComponent {
  @Input() tema!: Tema;
  @Input() index!: number;

  newEj!: Ejercicio;
  pregunta!: string;
  respuesta!: string;
  json = { pregunta: '', respuesta: '' };

  //Agregar el Ejercicio Pregunta-Respuest a la lista de Ejercicios del Tema
  ngOnInit() {
    this.tema.ejercicios.push(this.newEj); //ERROR EN CONSOLA DEL BROWSER
  }

  //Constructor
  constructor() {
    this.newEj = {
      id_tipo_ejercicio: 1,
      id_tema: 0,
      id_dificultad: 1,
      anotacion: 'nuevo ejercicio',
      data_json: this.json,
      fecha_creacion: new Date().toISOString(),
      fecha_modificacion: new Date().toISOString(),
    };
  }
}

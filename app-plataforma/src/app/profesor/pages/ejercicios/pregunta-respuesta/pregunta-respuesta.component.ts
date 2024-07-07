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
  @Input() newEj!: Ejercicio;

  pregunta!: string;
  respuesta!: string;
  json = { pregunta: '', respuesta: '' };

  //Constructor
  constructor() {}

  //Agregar el Ejercicio Pregunta-Respuest a la lista de Ejercicios del Tema
  ngOnInit() {
    this.newEj.data_json = this.json
    this.tema.ejercicios.push(this.newEj); //ERROR EN CONSOLA DEL BROWSER
  }
}

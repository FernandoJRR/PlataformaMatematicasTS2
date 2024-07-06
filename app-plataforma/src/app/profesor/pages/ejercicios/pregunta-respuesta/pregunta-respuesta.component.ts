import { Component, Input } from '@angular/core';
import { Ejercicio } from '../../../../interfaces/ejercicio';
import { Tema } from '../../../../interfaces/tema.interface';

@Component({
  selector: 'app-pregunta-respuesta',
  templateUrl: './pregunta-respuesta.component.html',
  styleUrls: ['./pregunta-respuesta.component.css'],
})
export class PreguntaRespuestaComponent {
  @Input() ejercicioJson!: {
    pregunta: string;
    respuesta: string;
    anotacion?: string;
  }; //Anotacion va afuera de detaJson en la DB (corregir en Frontend)

  ngOnInit() {
    if (!this.ejercicioJson) {
      this.ejercicioJson = { pregunta: '', respuesta: '' };
    }
  }


}

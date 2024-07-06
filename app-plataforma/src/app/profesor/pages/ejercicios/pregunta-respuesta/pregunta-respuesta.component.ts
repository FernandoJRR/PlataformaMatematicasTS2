import { Component, Input } from '@angular/core';
import { Ejercicio } from '../../../../interfaces/ejercicio';
import { Tema } from '../../../../interfaces/tema.interface';

@Component({
  selector: 'app-pregunta-respuesta',
  templateUrl: './pregunta-respuesta.component.html',
  styleUrls: ['./pregunta-respuesta.component.css']
})
export class PreguntaRespuestaComponent {
  @Input() ejercicioJson!: { pregunta: string; respuesta: string; };

  ngOnInit() {
    if (!this.ejercicioJson) {
      this.ejercicioJson = { pregunta: '', respuesta: '' };
    }
  }
}

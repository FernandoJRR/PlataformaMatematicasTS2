import { Component, Input } from '@angular/core';

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

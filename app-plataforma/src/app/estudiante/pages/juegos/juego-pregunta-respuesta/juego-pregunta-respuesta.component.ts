import { Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Ejercicio } from '../../../../interfaces/ejercicio';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-juego-pregunta-respuesta',
  templateUrl: './juego-pregunta-respuesta.component.html',
  styleUrl: './juego-pregunta-respuesta.component.css'
})
export class JuegoPreguntaRespuestaComponent {
  @Input() ejercicio!: Ejercicio;
  @Input() esCorrecta!: boolean;
  @Output() esCorrecta1!: boolean;
  @Output() next = new EventEmitter<{ correcta: boolean }>();

  pregunta: string = '';
  respuestaCorrecta: string = '';
  respuestaUsuario: string = '';
  constructor(private juegoService: JuegoService){}

  ngOnInit() {
    this.actualizarEjercicio();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['ejercicio']) {
      this.actualizarEjercicio();
    }
  }

  actualizarEjercicio() {
    if (this.ejercicio.data_json) {
      this.pregunta = this.ejercicio.data_json.pregunta;
      this.respuestaCorrecta = this.ejercicio.data_json.respuesta;
      this.respuestaUsuario = ''; // Limpiar el campo de entrada
    }
  }

  verificarRespuesta() {
    const correcta = this.respuestaUsuario.trim().toLowerCase() === this.respuestaCorrecta.trim().toLowerCase();
    
    if (this.ejercicio.id) {
      
    
    if (correcta) {
      alert('¡Respuesta correcta!');
      this.esCorrecta=true;
      this.ejercicio.id;
      this.juegoService.incrementarCorrectas(this.ejercicio.id);
      //this.ejercicio.
    } else {
      alert('Respuesta incorrecta. La respuesta correcta es: ' + this.respuestaCorrecta);
      this.esCorrecta=false;
      this.juegoService.incrementarIncorrectas(this.ejercicio.id);
    }

  }
    if(this.ejercicio){

    }
    this.next.emit({ correcta } );
  }

  }

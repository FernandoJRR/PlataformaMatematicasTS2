import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Ejercicio } from '../../../../interfaces/ejercicio';

@Component({
  selector: 'app-juego-unir-parejas',
  templateUrl: './juego-unir-parejas.component.html',
  styleUrls: ['./juego-unir-parejas.component.css']
})
export class JuegoUnirParejasComponent implements OnInit {
    @Input() ejercicio!: Ejercicio;
    @Output() next = new EventEmitter<void>();
  
    parejasIzquierda: string[] = [];
    parejasDerecha: string[] = [];
    parejasDerechaOriginal: string[] = [];
    seleccionIzquierda: number | null = null;
    seleccionDerecha: number | null = null;
    respuestas: { izquierda: number; derecha: number; correct: boolean }[] = [];
    mappingDerecha: number[] = [];
  
    ngOnInit() {
      if (this.ejercicio.data_json && this.ejercicio.data_json.parejasIzquierda && this.ejercicio.data_json.parejasDerecha) {
        this.parejasIzquierda = [...this.ejercicio.data_json.parejasIzquierda];
        this.parejasDerechaOriginal = [...this.ejercicio.data_json.parejasDerecha];
        this.parejasDerecha = this.shuffleArray([...this.ejercicio.data_json.parejasDerecha]);
  
        // Crear un mapa de las posiciones mezcladas a las posiciones originales
        this.mappingDerecha = this.parejasDerecha.map(item => this.parejasDerechaOriginal.indexOf(item));
      }
  
      // Inicializar respuestas
      this.respuestas = [];
    }
  
    shuffleArray(array: any[]): any[] {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  
    seleccionarIzquierda(index: number) {
      this.seleccionIzquierda = index;
      if (this.seleccionDerecha !== null) {
        this.verificarPareja();
      }
    }
  
    seleccionarDerecha(index: number) {
      this.seleccionDerecha = index;
      if (this.seleccionIzquierda !== null) {
        this.verificarPareja();
      }
    }
  
    verificarPareja() {
      if (this.seleccionIzquierda !== null && this.seleccionDerecha !== null) {
        // Verificar la pareja basada en los valores originales
        const derechaOriginalIndex = this.mappingDerecha[this.seleccionDerecha];
        const correcta = this.seleccionIzquierda === derechaOriginalIndex;
        this.respuestas.push({
          izquierda: this.seleccionIzquierda,
          derecha: this.seleccionDerecha,
          correct: correcta
        });
  
        if (correcta) {
          alert('¡Pareja correcta!');
        } else {
          alert('Pareja incorrecta. Inténtelo de nuevo.');
        }
  
        this.seleccionIzquierda = null;
        this.seleccionDerecha = null;
      }
    }
  
    verificarRespuesta() {
      const correctas = this.respuestas.filter(respuesta => respuesta.correct).length;
      if (correctas === this.parejasIzquierda.length) {
        alert('¡Todas las respuestas son correctas!');
        this.next.emit();
      } else {
        alert('Algunas respuestas son incorrectas. Por favor, inténtelo de nuevo.');
      }
    }
  
    esParejaCorrectaIzquierda(index: number): boolean {
      return this.respuestas.some(r => r.izquierda === index && r.correct);
    }
  
    esParejaIncorrectaIzquierda(index: number): boolean {
      return this.respuestas.some(r => r.izquierda === index && !r.correct);
    }
  
    esParejaCorrectaDerecha(index: number): boolean {
      return this.respuestas.some(r => r.derecha === index && r.correct);
    }
  
    esParejaIncorrectaDerecha(index: number): boolean {
      return this.respuestas.some(r => r.derecha === index && !r.correct);
    }
}

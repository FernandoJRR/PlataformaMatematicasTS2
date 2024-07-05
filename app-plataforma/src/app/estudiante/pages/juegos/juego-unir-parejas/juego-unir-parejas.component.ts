import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Ejercicio } from '../../../../interfaces/ejercicio';

@Component({
  selector: 'app-juego-unir-parejas',
  templateUrl: './juego-unir-parejas.component.html',
  styleUrls: ['./juego-unir-parejas.component.css']
})
export class JuegoUnirParejasComponent implements OnInit {
  @Input() ejercicio!: Ejercicio;
  @Output() next = new EventEmitter<{ correcta: boolean }>();

  parejasIzquierda: string[] = [];
  parejasDerecha: string[] = [];
  parejasDerechaOriginal: string[] = [];
  seleccionIzquierda: number | null = null;
  seleccionDerecha: number | null = null;
  respuestas: { izquierda: number; derecha: number; correct: boolean }[] = [];
  mappingDerecha: number[] = [];
  parejasIntentadas: Set<number> = new Set(); // Para rastrear parejas intentadas

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

      // Marcar esta pareja como intentada
      this.parejasIntentadas.add(this.seleccionIzquierda);

      this.seleccionIzquierda = null;
      this.seleccionDerecha = null;

      // Verificar si todas las parejas han sido intentadas
      if (this.parejasIntentadas.size === this.parejasIzquierda.length) {
        this.next.emit({ correcta: this.respuestas.every(r => r.correct) });
      }
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

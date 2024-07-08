import { Component, EventEmitter, Input, Output, OnInit, SimpleChanges } from '@angular/core';
import { Ejercicio } from '../../../../interfaces/ejercicio';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-juego-unir-parejas',
  templateUrl: './juego-unir-parejas.component.html',
  styleUrls: ['./juego-unir-parejas.component.css']
})
export class JuegoUnirParejasComponent implements OnInit {
  @Input() ejercicio!: Ejercicio;
  @Input() correctas!: number;
  @Output() next = new EventEmitter<{ correcta: boolean }>();
  parejasIzquierda: string[] = [];
  parejasDerecha: string[] = [];
  parejasDerechaOriginal: string[] = [];
  seleccionIzquierda: number | null = null;
  seleccionDerecha: number | null = null;
  respuestas: { izquierda: number; derecha: number; correct: boolean }[] = [];
  mappingDerecha: number[] = [];
  parejasIntentadas: Set<number> = new Set(); // Para rastrear parejas intentadas
  puntaje:number=0;

  constructor(private juegoService: JuegoService){}
  ngOnInit() {
    this.actualizarEjercicio();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['ejercicio']) {
      this.actualizarEjercicio();
    }
  }
  actualizarEjercicio(){
    if (this.ejercicio.data_json && this.ejercicio.data_json.parejasIzquierda && this.ejercicio.data_json.parejasDerecha) {
      this.parejasIzquierda = [...this.ejercicio.data_json.parejasIzquierda];
      this.parejasDerechaOriginal = [...this.ejercicio.data_json.parejasDerecha];
      this.parejasDerecha = this.shuffleArray([...this.ejercicio.data_json.parejasDerecha]);

      // Crear un mapa de las posiciones mezcladas a las posiciones originales
      this.mappingDerecha = this.parejasDerecha.map(item => this.parejasDerechaOriginal.indexOf(item));
      // Inicializar respuestas
      this.respuestas = [];
      this.puntaje=0;
      this.parejasIntentadas.clear();
    }

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
        //this.juegoService.incrementarUnirParejas(this.parejasDerecha.length);
      } else {
        alert('Pareja incorrecta. Inténtelo de nuevo.');
        //this.juegoService.incrementarUnirParejasIncorrectas(this.parejasDerecha.length);
      }
      this.calcularPuntaje(correcta);
      // Marcar esta pareja como intentada
      this.parejasIntentadas.add(this.seleccionIzquierda);

      this.seleccionIzquierda = null;
      this.seleccionDerecha = null;

      // Verificar si todas las parejas han sido intentadas
      if (this.parejasIntentadas.size === this.parejasIzquierda.length) {
        this.getCorrecta();
        this.next.emit({ correcta: this.respuestas.every(r => r.correct) });
      }
    }
  }

  calcularPuntaje(correcta: boolean) {
    const ValPareja: number = this.juegoService.getValorXejercicio() / this.parejasDerecha.length;
  
    if (correcta) {
      this.puntaje += ValPareja;
    } else {
    }
    this.puntaje = parseFloat(this.puntaje.toFixed(2));
  }
  getCorrecta(): boolean{
    let correcta: boolean = false
    if (this.puntaje>=(this.juegoService.getValorXejercicio())*0.60) {
      correcta= true
    }else{
      correcta= false
    }
    if (this.ejercicio.id) {
    console.log("puntaje de "+this.puntaje);
      this.juegoService.unirParejasPuntaje(this.ejercicio.id,correcta, this.puntaje)
    }
    this.puntaje=0;
    return correcta;
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

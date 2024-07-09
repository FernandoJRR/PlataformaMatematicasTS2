import { Component, Input } from '@angular/core';
import { Tema } from '../../../../interfaces/tema.interface';
import { Ejercicio } from '../../../../interfaces/ejercicio';

@Component({
  selector: 'app-unir-parejas',
  templateUrl: './unir-parejas.component.html',
  styleUrl: './unir-parejas.component.css',
})
export class UnirParejasComponent{
  @Input() tema!: Tema;
  @Input() newEj!: Ejercicio;
  parejas = [
    { izquierda: '', derecha: '' },
  ];  
  
  ngOnInit() {
    const parejasIzquierda = this.parejas.map(p => p.izquierda);
    const parejasDerecha = this.parejas.map(p => p.derecha);
    this.newEj.data_json = {
      parejasIzquierda: parejasIzquierda,
      parejasDerecha: parejasDerecha
    };
    this.tema.ejercicios.push(this.newEj);
  }

  //Funciones
  agregarPareja() {
    this.parejas.push({ izquierda: '', derecha: '' });
  }

  eliminarPareja(index: number) {
    this.parejas.splice(index, 1);
  }

  actualizarPareja(
    index: number,
    lado: 'izquierda' | 'derecha',
    valor: string
  ) {
    this.parejas[index][lado] = valor;
    const parejasIzquierda = this.parejas.map(p => p.izquierda);
    const parejasDerecha = this.parejas.map(p => p.derecha);
    this.newEj.data_json = {
      parejasIzquierda: parejasIzquierda,
      parejasDerecha: parejasDerecha
    };
  }
}
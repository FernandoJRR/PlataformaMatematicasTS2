import { Component } from '@angular/core';

@Component({
  selector: 'app-unir-parejas',
  templateUrl: './unir-parejas.component.html',
  styleUrl: './unir-parejas.component.css'
})
export class UnirParejasComponent {
  parejas: Array<{ izquierda: string, derecha: string }> = [{ izquierda: '', derecha: '' }];

  agregarPareja() {
    this.parejas.push({ izquierda: '', derecha: '' });
  }

  eliminarPareja(index: number) {
    this.parejas.splice(index, 1);
  }

  actualizarPareja(index: number, lado: 'izquierda' | 'derecha', valor: string) {
    this.parejas[index][lado] = valor;
  }

}

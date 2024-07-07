import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  correctas: number = 0;
  incorrectas: number = 0;
  puntaje: number = 0;
  totalEjercicios: number=0;

  setTotalEjercicios(total: number){
    this.totalEjercicios = total;
  }

  getTotalEjercicios(){
    return this.totalEjercicios;
  }

  getValorXejercicio(){
    return 100/this.totalEjercicios;
  }

  incrementarUnirParejas(cantParejas:number){
    const valPareja: number=this.getValorXejercicio()/cantParejas;
    //this.puntaje+=valPareja/100;
    this.correctas+=valPareja/100;
  }
  incrementarUnirParejasIncorrectas(cantParejas:number){
    const valPareja: number=this.getValorXejercicio()/cantParejas;
    //this.puntaje+=valPareja/100;
    this.incorrectas+=valPareja/100;
  }

  incrementarCorrectas() {
    this.correctas++;
  }

  incrementarIncorrectas() {
    this.incorrectas++;
  }

  getCorrectas(){
    return this.correctas;
  }
  getInCorrectas(){
    return this.incorrectas;
  }

  calcularPuntaje(totalPreguntas: number) {
    return this.puntaje = Math.floor((this.correctas / totalPreguntas) * 100 * 100) / 100;
;
  }

  resetearEstadisticas() {
    this.correctas = 0;
    this.incorrectas = 0;
    this.puntaje = 0;
  }
}

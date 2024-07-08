import { Injectable } from '@angular/core';
import { EjercicioPartidax } from '../../../interfaces/ejercicio_partida.interface';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  correctas: number = 0;
  incorrectas: number = 0;
  puntaje: number = 0;
  totalEjercicios: number=0;
  ejerciciosResueltos: EjercicioPartidax[] = [];
  ejercicioR!:EjercicioPartidax;
  actualCorrecta!: boolean;

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

  incrementarCorrectas(id:number=1) {
    this.correctas++;
  }

  incrementarIncorrectas(id:number=1) {
    this.incorrectas++;
  }

  getCorrectas(){
    return this.correctas;
  }
  getInCorrectas(){
    return this.incorrectas;
  }

  calcularPuntaje() {
    const puntajeRedondeado = this.puntaje.toFixed(2);
    console.log('El puntaje es ' + puntajeRedondeado);
    return parseFloat(puntajeRedondeado);
}


  resetearEstadisticas() {
    this.correctas = 0;
    this.incorrectas = 0;
    this.puntaje = 0;
  }

  //Eliminar los siguientes dos metodos posiblemente
  

  unirParejasPuntaje(id: number,correcta: boolean, puntaje: number){
    if(correcta){
      this.correctas++; 
      this.actualCorrecta=true;
    }else{
      this.incorrectas++;
      this.actualCorrecta=false;
    }
    this.puntaje=this.puntaje+puntaje;
    this.agregarEjercicioPartida(id, correcta);
  }

  

  agregarEjercicioPartida(id_ejercicio: number, correcta:boolean){
    this.ejercicioR ={
      id_ejercicio: id_ejercicio,
      resuelto_satisfactoriamente: correcta
    };
    this.ejerciciosResueltos.push(this.ejercicioR);
  }

  getEjerciciosPartida(){
    return this.ejerciciosResueltos;
  }

  getCorrecta(): boolean{
    return this.actualCorrecta;
  }

  
}

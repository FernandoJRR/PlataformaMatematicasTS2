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

  incrementarCorrectas(id_ejercicio: number) {
    this.correctas++;
    this.puntaje+=this.getValorXejercicio();
    this.actualCorrecta=true;
    this.agregarEjercicioPartida(id_ejercicio, true);
    
  }

  incrementarIncorrectas(id_ejercicio: number) {
    this.incorrectas++;
    this.actualCorrecta=false;
    this.agregarEjercicioPartida(id_ejercicio, false);
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

  getCorrectas(){
    return this.correctas;
  }
  getInCorrectas(){
    return this.incorrectas;
  }

  calcularPuntaje() {
    console.log('El puntaje es '+this.puntaje)
    return this.puntaje ;
  }

  resetearEstadisticas() {
    this.correctas = 0;
    this.incorrectas = 0;
    this.puntaje = 0;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../../interfaces/tema.interface';

@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {

  constructor(private http: HttpClient) {}
  tema!:Tema[]

  private baseUrl: string = 'http://localhost:3000/';

  //Peticiones
  cargarJuegosRefuerzo() {
    const temas: Tema[] =[];
    return this.http.post(`${this.baseUrl}ejercicio/ejercicios-partida/${1}/${1}/${3}/`, {   
      "temas": []
  });
  }
}

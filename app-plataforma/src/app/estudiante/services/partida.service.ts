import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Partida } from '../../interfaces/partida.interface';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {

  constructor(private http: HttpClient) {}

  private baseUrl: string = 'http://localhost:3000';

  //Peticiones
  guardarPartida(nuevaPartida: Partida) {
    console.log(nuevaPartida);
    return this.http.post(`${this.baseUrl}/partida/`, nuevaPartida );
  }

  /*listarEjericiosPorTema() {
    return this.http.get(`${this.baseUrl}/temario/`);
  }

  listarEjericiosPorTemaTipoModo(id_tema:number,id_tipo: number, id_modo: number) {
    return this.http.get(`${this.baseUrl}/temario/`);
  }

  obtenerTemaConEjercicios(id: number){
    return this.http.get(`${this.baseUrl}/temario/tema/${id}`);

  }*/
}

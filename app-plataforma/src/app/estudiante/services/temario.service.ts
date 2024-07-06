import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Temario } from '../../interfaces/temario.interface';

@Injectable({
  providedIn: 'root'
})
export class TemarioService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = 'http://localhost:3000';

  //Peticiones
  listarTemarios() {
    return this.http.get(`${this.baseUrl}/temario/`);
  }

  listarEjericiosPorTema() {
    return this.http.get(`${this.baseUrl}/temario/`);
  }

  listarEjericiosPorTemaTipoModo(id_tema:number,id_tipo: number, id_modo: number) {
    return this.http.get(`${this.baseUrl}/temario/`);
  }

}

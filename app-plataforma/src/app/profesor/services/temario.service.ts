import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Temario } from '../../interfaces/temario.interface';

@Injectable({
  providedIn: 'root',
})
export class TemarioService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = 'http://localhost:3000';

  //Peticiones
  crearTemario(nuevoTemario: Temario) {
    return this.http.post(`${this.baseUrl}/temario`, nuevoTemario);
  }
}

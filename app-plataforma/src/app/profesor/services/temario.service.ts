import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Temario } from '../../interfaces/temario.interface';
import { Observable } from 'rxjs';
import { Ejercicio } from '../../interfaces/ejercicio';

@Injectable({
  providedIn: 'root',
})
export class TemarioService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = 'http://localhost:3000';

  /* PETICIONES A BACKEND */
  // Enviar Temario
  crearTemario(nuevoTemario: Temario) {
    return this.http.post(`${this.baseUrl}/temario`, nuevoTemario);
  }

  // Obtener todos los temarios
  obtenerListaTemarios(): Observable<Temario[]> {
    return this.http.get<Temario[]>(`${this.baseUrl}/temarios`);
  }

  // Obtener un temario por su ID específico
  obtenerTemarioPorId(id: number): Observable<Temario> {
    return this.http.get<Temario>(`${this.baseUrl}/temario/${id}`);
  }

  // Actualizar un temario
  actualizarTemario(temario: Temario): Observable<Temario> {
    return this.http.put<Temario>(
      `${this.baseUrl}/temario/${temario.id}`,
      temario
    );
  }
}

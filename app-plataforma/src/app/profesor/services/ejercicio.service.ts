import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ejercicio } from '../../interfaces/ejercicio';

@Injectable({
  providedIn: 'root',
})
export class EjercicioService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = 'http://localhost:3000';

  /* PETICIONES A BACKEND */
  // Obtener ejercicios por ID de tema
  obtenerListaEjerciciosPorTemaId(temaId: number): Observable<Ejercicio[]> {
    return this.http.get<Ejercicio[]>(
      `${this.baseUrl}/tema/${temaId}/ejercicios`
    );
  }

  // Obtener un ejercicio específico por ID
  obtenerEjercicioPorId(id: number): Observable<Ejercicio> {
    return this.http.get<Ejercicio>(`${this.baseUrl}/ejercicio/${id}`);
  }

  // Actualizar un ejercicio
  actualizarEjercicio(ejercicio: Ejercicio): Observable<Ejercicio> {
    return this.http.put<Ejercicio>(
      `${this.baseUrl}/ejercicio/${ejercicio.id}`,
      ejercicio
    );
  }
}

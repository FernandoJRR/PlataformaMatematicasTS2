import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../../interfaces/tema.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TemaService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = 'http://localhost:3000';

  /* PETICIONES A BACKEND */
  // Obtener temas por ID de temario
  obtenerListaTemasPorTemarioId(temarioId: number): Observable<Tema[]> {
    return this.http.get<Tema[]>(`${this.baseUrl}/temario/${temarioId}/temas`);
  }

  // Obtener un tema específico por ID
  obtenerTemaPorId(id: number): Observable<Tema> {
    return this.http.get<Tema>(`${this.baseUrl}/tema/${id}`);
  }

  // Actualizar un tema
  actualizarTema(tema: Tema): Observable<Tema> {
    return this.http.put<Tema>(`${this.baseUrl}/tema/${tema.id}`, tema);
  }
}

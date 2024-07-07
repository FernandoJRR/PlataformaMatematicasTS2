import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Temario } from '../../interfaces/temario.interface';
import { Observable } from 'rxjs';
import { Tema } from '../../interfaces/tema.interface';
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
    return this.http.put<Temario>(`${this.baseUrl}/temario/${temario.id}`, temario);
  }

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

  // Obtener ejercicios por ID de tema
  obtenerListaEjerciciosPorTemaId(temaId: number): Observable<Ejercicio[]> {
    return this.http.get<Ejercicio[]>(`${this.baseUrl}/tema/${temaId}/ejercicios`);
  }

  // Obtener un ejercicio específico por ID
  obtenerEjercicioPorId(id: number): Observable<Ejercicio> {
    return this.http.get<Ejercicio>(`${this.baseUrl}/ejercicio/${id}`);
  }

  // Actualizar un ejercicio
  actualizarEjercicio(ejercicio: Ejercicio): Observable<Ejercicio> {
    return this.http.put<Ejercicio>(`${this.baseUrl}/ejercicio/${ejercicio.id}`, ejercicio);
  }
}

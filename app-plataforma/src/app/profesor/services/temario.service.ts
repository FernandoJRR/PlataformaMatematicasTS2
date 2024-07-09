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
    return this.http.post(`${this.baseUrl}/temario/`, nuevoTemario);
  }

  // Obtener todos los temarios
  obtenerListaTemariosProfesor(username: string): Observable<Temario[]> {
    return this.http.get<Temario[]>(`${this.baseUrl}/temario/temarios-profesor/${username}`);
  }

  // Obtener un temario por su ID específico
  obtenerTemarioPorId(id: number): Observable<Temario> {
    return this.http.get<Temario>(`${this.baseUrl}/temario/${id}`);
  }

  // Actualizar un temario
  actualizarTemario(temario: Temario): Observable<Temario> {
    return this.http.patch<Temario>(
      `${this.baseUrl}/temario/${temario.id}`,
      temario
    );
  }

  /*
  eliminarTemario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/temario/${id}`);
  }
  */

}

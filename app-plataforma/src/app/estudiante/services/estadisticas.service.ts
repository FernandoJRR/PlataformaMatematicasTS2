import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  constructor(private http: HttpClient) {}

  private baseUrl: string = 'http://localhost:3000';

  /* PETICIONES A BACKEND */
  // Obtener reporte partida de un profesor
  obtenerReportePartidasPromedio(username_jugador: string): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/reporte/temaUsuario/${username_jugador}`
    );
  }

}

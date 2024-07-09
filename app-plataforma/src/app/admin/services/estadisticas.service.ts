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
  obtenerReportePartidasPromedio(): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/reporte/reportePartidaPromedio`
    );
  }

  obtenerPartidasJugadas(): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/reporte/reportePartidaTema`
    );
  }

  obtenerPartidasPorTemario(): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/reporte/partidaPorTemario`
    );
  }

  obtenerTemas(): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/temario`
    );
  }
  obtenerTopEstudiatesTema(idTema: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/reporte/topEstudiantes/${idTema}`
    );
  }
}
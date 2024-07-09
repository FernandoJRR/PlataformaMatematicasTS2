import { Component, ElementRef } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { EstadisticasService } from '../../services/estadisticas.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-estadisticas-admin',
  standalone: true,
  imports: [NgFor],
  templateUrl: './estadisticas-admin.component.html',
  styleUrl: './estadisticas-admin.component.css'
})
export class EstadisticasAdminComponent {

  // Datos simulados del progreso del estudiante
  constructor(
    private elementRef: ElementRef,
    private estadisticaService: EstadisticasService,
    ) {}

  cantidad_partidas: number = 0;
  puntaje_promedio: number = 0;
  temas: any = [];
  ngOnInit(): void {
    this.estadisticaService.obtenerTemas().subscribe(
      (response) => {
        for (const temario of response) {
          for (const tema of temario.temas) {
            this.estadisticaService.obtenerTopEstudiatesTema(tema.id).subscribe(
              (response2) => {
                this.temas.push({id: tema.id, titulo: tema.titulo, top: response2});
              },
              (error) => {
              }
            );
          }
        }
      },
      (error) => {
        console.error('Error al obtener las estadisticas', error);
        alert('Ocurrió un error al obtener las estadisticas.');
      }
    )
    this.estadisticaService.obtenerReportePartidasPromedio().subscribe(
      (response) => {
        this.cantidad_partidas = response.totalPartidas;
        this.puntaje_promedio = response.puntajePromedio;
      },
      (error) => {
        console.error('Error al obtener las estadisticas', error);
        alert('Ocurrió un error al obtener las estadisticas.');
      }
    )
    this.estadisticaService.obtenerPartidasJugadas().subscribe(
      (response) => {
        console.log(response);
        let datasetPuntaje = [];
        let datasetPartidas = [];
        for (const resultado of response) {
          datasetPuntaje.push({
              label: resultado.temaTitulo,
              data: [resultado.puntajePromedio],
              backgroundColor: this.generarColor(),
              borderColor: this.generarColor(),
              borderWidth: 1
          });
        }
        for (const resultado of response) {
          datasetPartidas.push({
              label: resultado.temaTitulo,
              data: [resultado.totalPartidas],
              backgroundColor: this.generarColor(),
              borderColor: this.generarColor(),
              borderWidth: 1
          });
        }
        this.generarGrafico(datasetPuntaje, 'graficoPuntajeTemas');
        this.generarGrafico(datasetPartidas, 'graficoPartidasJugadasTemas');
      },
      (error) => {
        console.error('Error al obtener las estadisticas', error);
        alert('Ocurrió un error al obtener las estadisticas.');
      }
    );

    this.estadisticaService.obtenerPartidasPorTemario().subscribe(
      (response) => {
        console.log(response);
        let datasetPuntaje = [];
        let datasetPartidas = [];
        for (const resultado of response) {
          datasetPuntaje.push({
              label: resultado.temarioTitulo,
              data: [resultado.puntajePromedio],
              backgroundColor: this.generarColor(),
              borderColor: this.generarColor(),
              borderWidth: 1
          });
        }
        for (const resultado of response) {
          datasetPartidas.push({
              label: resultado.temarioTitulo,
              data: [resultado.totalPartidas],
              backgroundColor: this.generarColor(),
              borderColor: this.generarColor(),
              borderWidth: 1
          });
        }
        this.generarGrafico(datasetPuntaje, 'graficoPuntajeTemarios');
        this.generarGrafico(datasetPartidas, 'graficoPartidasJugadasTemarios');
      },
      (error) => {
        console.error('Error al obtener las estadisticas', error);
        alert('Ocurrió un error al obtener las estadisticas.');
      }
    );
  }

  generarGrafico(input: any, idCanvas: string) {
    let htmlRef = this.elementRef.nativeElement.querySelector('#'+idCanvas);
    new Chart(htmlRef, {
      type: 'bar',
      data: {
        labels: ['Temas'],
        datasets: input
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  generarColor(){
    return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
  }
}
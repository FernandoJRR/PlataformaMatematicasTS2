import { Component, ElementRef } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { EstadisticasService } from '../../services/estadisticas.service';
import { GlobalsService } from '../../../globals/globals.service';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-estadisticas-profesor',
  standalone: true,
  imports: [],
  templateUrl: './estadisticas-profesor.component.html',
  styleUrl: './estadisticas-profesor.component.css'
})
export class EstadisticasProfesorComponent {
  // Datos simulados del progreso del estudiante
  constructor(
    private elementRef: ElementRef,
    private estadisticaService: EstadisticasService,
    private globalService: GlobalsService
    ) {}

  user: User = this.globalService.getUser()
  ngOnInit(): void {
    this.estadisticaService.obtenerReportePartidaProfesor(this.user.username).subscribe(
      (response) => {
        console.log(response);
        let dataset = [];
        for (const resultado of response) {
          dataset.push({
              label: resultado.temaTitulo,
              data: [resultado.puntajePromedio],
              backgroundColor: this.generarColor(),
              borderColor: this.generarColor(),
              borderWidth: 1
          });
        }
        this.generarGrafico(dataset, 'graficoPuntajeTemas');
      },
      (error) => {
        console.error('Error al obtener las estadisticas', error);
        alert('Ocurrió un error al obtener las estadisticas.');
      }
    );
    this.estadisticaService.obtenerReportePartidaProfesor(this.user.username).subscribe(
      (response) => {
        console.log(response);
        let dataset = [];
        for (const resultado of response) {
          dataset.push({
              label: resultado.temaTitulo,
              data: [resultado.totalPartidas],
              backgroundColor: this.generarColor(),
              borderColor: this.generarColor(),
              borderWidth: 1
          });
        }
        this.generarGrafico(dataset, 'graficoPartidasJugadasTemas');
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

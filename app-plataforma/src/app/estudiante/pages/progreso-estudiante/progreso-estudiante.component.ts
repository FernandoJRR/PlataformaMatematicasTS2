import { Component, ElementRef, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { EstadisticasService } from '../../services/estadisticas.service';
import { GlobalsService } from '../../../globals/globals.service';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-progreso-estudiante',
  templateUrl: './progreso-estudiante.component.html',
  styleUrls: ['./progreso-estudiante.component.css']
})
export class ProgresoEstudianteComponent implements OnInit {
  // Datos simulados del progreso del estudiante
  constructor(
    private elementRef: ElementRef,
    private estadisticaService: EstadisticasService,
    private globalService: GlobalsService
    ) {}

  user: User = this.globalService.getUser()
  ngOnInit(): void {
    this.estadisticaService.obtenerReportePartidasPromedio(this.user.username).subscribe(
      (response) => {
        console.log(response);
        let dataset = [];
        for (const resultado of response) {
          dataset.push({
              label: resultado.tema,
              data: [resultado.promedioPuntaje],
              backgroundColor: this.generarColor(),
              borderColor: this.generarColor(),
              borderWidth: 1
          });
        }
        this.generarGrafico(dataset, 'graficoPromedioPuntaje');
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

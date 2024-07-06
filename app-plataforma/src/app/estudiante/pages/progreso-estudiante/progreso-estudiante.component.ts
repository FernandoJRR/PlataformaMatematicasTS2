import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-progreso-estudiante',
  templateUrl: './progreso-estudiante.component.html',
  styleUrls: ['./progreso-estudiante.component.css']
})
export class ProgresoEstudianteComponent implements OnInit {
  // Datos simulados del progreso del estudiante
  progreso: any = {
    normal: {
      preguntaRespuesta: { correctas: 80, incorrectas: 20 },
      opcionMultiple: { correctas: 70, incorrectas: 30 },
      unirParejas: { correctas: 60, incorrectas: 40 }
    },
    contrarreloj: {
      preguntaRespuesta: { correctas: 50, incorrectas: 50 },
      opcionMultiple: { correctas: 40, incorrectas: 60 },
      unirParejas: { correctas: 30, incorrectas: 70 }
    }
  };

  constructor() {}

  ngOnInit(): void {
    this.generarGrafico('preguntaRespuesta', 'graficoPreguntaRespuesta');
    this.generarGrafico('opcionMultiple', 'graficoOpcionMultiple');
    this.generarGrafico('unirParejas', 'graficoUnirParejas');
  }

  generarGrafico(tipoJuego: string, idCanvas: string) {
    const datosNormal = this.progreso.normal[tipoJuego];
    const datosContrarreloj = this.progreso.contrarreloj[tipoJuego];

    new Chart(idCanvas, {
      type: 'bar',
      data: {
        labels: ['Correctas', 'Incorrectas'],
        datasets: [
          {
            label: 'Modo Normal',
            data: [datosNormal.correctas, datosNormal.incorrectas],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          },
          {
            label: 'Modo Contrarreloj',
            data: [datosContrarreloj.correctas, datosContrarreloj.incorrectas],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }
        ]
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
}

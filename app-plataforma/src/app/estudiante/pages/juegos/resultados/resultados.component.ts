import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  modoJuego!: string;
  correctas!: number;
  incorrectas!: number;
  puntaje!: number;
  ejercicios: any[] = [];

  totalEjercicios: number = 0;
  tipoEjercicioCount: { [key: string]: number } = {
    preguntaRespuesta: 0,
    unirParejas: 0,
    opcionMultiple: 0
  };

  constructor(private router: Router) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      modoJuego: string,
      correctas: number,
      incorrectas: number,
      puntaje: number,
      ejercicios: any[]
    };

    if (state) {
      this.modoJuego = state.modoJuego;
      this.correctas = state.correctas;
      this.incorrectas = state.incorrectas;
      this.puntaje = state.puntaje;
      this.ejercicios = state.ejercicios;
    }
  }

  ngOnInit(): void {
    this.totalEjercicios = this.ejercicios.length;
    this.ejercicios.forEach(ejercicio => {
      if (ejercicio.id_tipo_ejercicio === 1) {
        this.tipoEjercicioCount['preguntaRespuesta']++;
      } else if (ejercicio['id_tipo_ejercicio'] === 2) {
        this.tipoEjercicioCount['unirParejas']++;
      } else if (ejercicio.id_tipo_ejercicio === 3) {
        this.tipoEjercicioCount['opcionMultiple']++;
      }
    });
  }

  irAEleccionJuegos() {
    this.router.navigate(['/estudiante/eleccion-juego']);
  }
}

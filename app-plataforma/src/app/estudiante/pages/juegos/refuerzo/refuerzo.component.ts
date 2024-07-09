import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EjerciciosService } from '../../../services/ejercicios.service';
import { Ejercicio } from '../../../../interfaces/ejercicio';


@Component({
  selector: 'app-refuerzo',
  templateUrl: './refuerzo.component.html',
  styleUrl: './refuerzo.component.css'
})
export class RefuerzoComponent {

  ejercicios!:Ejercicio[];
  constructor(
              private router:Router,
              private ejerciciosService: EjerciciosService) { }

  ngOnInit(){
    this.cargarModoRefuerzo();
  }

  cargarModoRefuerzo(){
    this.ejerciciosService.cargarJuegosRefuerzo()
    .subscribe({
      next: (response: Object) => {
        this.ejercicios = response as Ejercicio[];
        this.router.navigate(['/estudiante/juego', { data: JSON.stringify(this.ejercicios), modo: 3 }]);
      },
      error: (error) => {
        console.error('Error al cargar Ejericicios', error);
        alert(error.error);
      }
    });
    //this.router.navigate(['/estudiante/juego', { data: JSON.stringify(ejerciciosFiltrados), modo: this.modoJuego }]);
  }

}

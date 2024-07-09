import { Component, OnInit } from '@angular/core';
import { PartidaService } from '../../services/partida.service';
//import { Logro } from '../../../interfaces/logro.interface';
import Response from 'express';
import { GlobalsService } from '../../../globals/globals.service';
import { User } from '../../../interfaces/user.interface';

interface Logro {
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css'],
})
export class LogrosComponent implements OnInit {
  logros: Logro[] = [
    {
      titulo: 'Primera Partida',
      descripcion: 'Juega una partida por primera vez',
    },
    {
      titulo: 'Primera Victoria',
      descripcion:
        'Obten un puntaje de mas del 60% en una partida por primera vez',
    },
    {
      titulo: 'Partida Perfecta',
      descripcion: 'Obten un puntaje del 100% en una partida',
    },
    {
      titulo: 'Flash',
      descripcion: 'Juega una partida en modo Contrarreloj por primera vez',
    },
    {
      titulo: 'El Invencible',
      descripcion: 'Juega una partida en modo Invencible por primera vez',
    },
    {
      titulo: 'Reforzando',
      descripcion: 'Juega una partida en modo Refuerzo por primera vez',
    },
  ];

  user:User= this.globals.getUser();

  constructor(
          private partidaService: PartidaService,
        private globals: GlobalsService) {}

  ngOnInit(): void {
    this.cargarLogrosUser();
  }

  cargarLogrosUser() {
    this.partidaService.obtenerLogros(this.globals.getUser().username).subscribe({
      next: (response: Object) => {
        this.logros = response as Logro[];
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}

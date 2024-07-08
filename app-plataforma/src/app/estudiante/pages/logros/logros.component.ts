import { Component, OnInit } from '@angular/core';
import { PartidaService } from '../../services/partida.service';
//import { Logro } from '../../../interfaces/logro.interface';


interface Logro {
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {
  logros: Logro[] = [];

  constructor(private partidaService: PartidaService) {}

  ngOnInit(): void {
    
  }
}

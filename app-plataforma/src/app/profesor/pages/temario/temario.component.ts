import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material/material.module';
import { TemarioService } from '../../services/temario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temario',
  templateUrl: './temario.component.html',
  styleUrl: './temario.component.css'
})
export class TemarioComponent {

  titulo!: string;
  descripcion!: string;
  
  constructor(
    private temarioService: TemarioService,
    private router: Router
  ) {}

  agregarTema(){}

  crearTemario(){}


}

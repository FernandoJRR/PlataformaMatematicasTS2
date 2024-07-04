import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material/material.module';
import { TemarioService } from '../../services/temario.service';
import { Router } from '@angular/router';
import { GlobalsService } from '../../../globals/globals.service';
import { User } from '../../../interfaces/user.interface';
import { Temario } from '../../../interfaces/temario.interface';
import { Tema } from '../../../interfaces/tema.interface';

@Component({
  selector: 'app-temario',
  templateUrl: './temario.component.html',
  styleUrl: './temario.component.css'
})
export class TemarioComponent {
  /*
  temas: Array<{ titulo: string, descripcion: string }> = [];
  titulo!: string;
  descripcion!: string;
  usuario_creador: User = this.globals.getUser();
  */
  temas: Array<any> = [];
  titulo!: string;
  descripcion!: string;
  usuario_creador: User;

  constructor(
    private globals: GlobalsService,
    private temarioService: TemarioService,
    private router: Router
  ) {
    this.usuario_creador = this.globals.getUser();
  }

  //Funciones
  /*
  crearTemario() {
    if (!this.titulo || !this.descripcion) {
      // Validar que el título y la descripción no estén vacíos
      alert('El título y la descripción son obligatorios.');
      return;
    }

    //Objeto nuevo Temario
    const nuevoTemario: Temario = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      username_creador: this.usuario_creador.username,
      fecha_creacion: new Date().toISOString(),
      temas: this.temas
    };


    this.temarioService.crearTemario(nuevoTemario).subscribe(
      response => {
        alert('Temario creado con éxito');
        this.router.navigate(['/']);
      },
      error => {
        console.error('Error al crear el temario', error);
        alert('Ocurrió un error al crear el temario.');
      }
    );
  }
    */

  // Función para agregar un tema al temario
  
  agregarTema() {
    this.temas.push({ titulo: '', descripcion: '', ejercicios: [] });
  }
}

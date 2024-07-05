import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material/material.module';
import { TemarioService } from '../../services/temario.service';
import { Router } from '@angular/router';
import { GlobalsService } from '../../../globals/globals.service';
import { User } from '../../../interfaces/user.interface';
import { Temario } from '../../../interfaces/temario.interface';
import { Tema } from '../../../interfaces/tema.interface';
import { Ejercicio } from '../../../interfaces/ejercicio';

@Component({
  selector: 'app-temario',
  templateUrl: './temario.component.html',
  styleUrl: './temario.component.css',
})
export class TemarioComponent {
  /*
  temas: Array<{ titulo: string, descripcion: string }> = [];
  titulo!: string;
  descripcion!: string;
  usuario_creador: User = this.globals.getUser();
  */
  titulo!: string;
  descripcion!: string;
  usuario_creador: User;
  newTemario!:Temario;


  constructor(
    private globals: GlobalsService,
    private temarioService: TemarioService,
    private router: Router
  ) {
    this.usuario_creador = this.globals.getUser();
    this.newTemario = {
      titulo: '',
      descripcion: '',
      username_creador: this.usuario_creador.username,
      fecha_creacion: new Date().toISOString(),
      temas: []
    };
  }

  ngOnInit(): void {
    console.log(this.newTemario.temas.length);
    
  }
  //Funciones
  // Función para agregar un tema al temario
  agregarTema() {
    const nuevoTema: Tema = {
      titulo: '',
      descripcion: '',
      id_temario: 0, // Asignar un valor temporal, será actualizado al guardar el temario
      id_tema_previo: this.newTemario.temas.length > 0 ? this.newTemario.temas[this.newTemario.temas.length - 1].id! : 0, // Asignar el ID del tema previo si existe
      fecha_creacion: new Date().toISOString(),
      ejercicios: []
    };
    this.newTemario.temas.push(nuevoTema);
    
  }

  // Funcion para crear el temario con toda la data
  crearTemario() {
    if (!this.titulo || !this.descripcion) {
      // Validar que el título y la descripción no estén vacíos
      alert('El título y la descripción son obligatorios.');
      return;
    }
    
    
    this.newTemario.titulo = this.titulo;
    this.newTemario.descripcion = this.descripcion;
    this.newTemario.username_creador = this.usuario_creador.username;
    this.newTemario.fecha_creacion = new Date().toISOString();
    this.newTemario.temas.forEach(element => {
      element.ejercicios = element.ejercicios.filter((item): item is Ejercicio => item !== undefined);
    });
    console.log(this.newTemario);
    this.temarioService.crearTemario(this.newTemario).subscribe(
      (response) => {
        alert('Temario creado con éxito');
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error al crear el temario', error);
        alert('Ocurrió un error al crear el temario.');
      }
    );
  }
}

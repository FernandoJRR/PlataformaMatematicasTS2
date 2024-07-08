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
  titulo!: string;
  descripcion!: string;
  usuario_creador: User;
  newTemario!: Temario;

  //Constructor
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
      temas: [],
    };
  }

  //
  ngOnInit(): void {
    console.log(this.newTemario.temas.length);
  }

  // Función para agregar un tema al temario
  agregarTema() {
    const nuevoTema: Tema = {
      titulo: '',
      descripcion: '',
      id_temario: 0, // Asignar un valor temporal, será actualizado al guardar el temario
      id_tema_previo:
        this.newTemario.temas.length > 0
          ? this.newTemario.temas[this.newTemario.temas.length - 1].id!
          : 0, // Asignar el ID del tema previo si existe
      fecha_creacion: new Date().toISOString(),
      ejercicios: [],
    };
    this.newTemario.temas.push(nuevoTema);
  }

  //Funcion para eliminar un Tema
  eliminarTema(index: number) {
    this.newTemario.temas.splice(index, 1);
  }

  // Funcion para crear el temario con toda la data
  crearTemario() {
    if (!this.titulo || !this.descripcion) {
      // Validar que el título y la descripción no estén vacíos
      alert('Complete todos los campos del Temario.');
      return;
    }
    
    //Validar que los Temas no esten vacios
    for (const tema of this.newTemario.temas) {
      if (!tema.titulo || !tema.descripcion) {
        alert('Por favor, complete los campos obligatorios de cada Tema.');
        return;
      }

      //validar que los ejercicios no esten vacios
      for (const ejercicio of tema.ejercicios) {
        console.log('Ejercicio:', ejercicio);

        if (ejercicio.id_dificultad == -1 || ejercicio.id_tipo_ejercicio == -1 || ejercicio.data_json == '') {
          alert('Por favor, complete todos los campos de cada ejercicio.');
          return;
        }
      }
    }

    console.log('Temario sin procesar:', this.newTemario);

    this.newTemario.titulo = this.titulo;
    this.newTemario.descripcion = this.descripcion;
    this.newTemario.username_creador = this.usuario_creador.username;
    this.newTemario.fecha_creacion = new Date().toISOString();
    this.newTemario.temas.forEach((element) => {
      element.ejercicios = element.ejercicios.filter(
        (item): item is Ejercicio => item !== undefined
      );
    });

    //

    console.log('Temario procesado:', this.newTemario);
    
    //Enviamos el Objeto a la ruta para crear Temario (Backend)
    this.temarioService.crearTemario(this.newTemario).subscribe(
      (response) => {
        alert('Temario creado con éxito');
        this.router.navigate(['/profe']);
      },
      (error) => {
        console.error('Error al crear el temario', error);
        alert('Ocurrió un error al crear el temario.');
      }
    );
  }
}
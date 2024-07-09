import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  nombre!: string;
  username!: string;
  password!: string;
  user!: User;
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    console.log('nada');
    if (!this.username || !this.password) {
      Swal.fire({
        icon: 'error',
        title: 'Campos vacíos',
        text: 'Por favor, completa todos los campos.',
      });
      return;
    }
    this.authService.login(this.username, this.password).subscribe({
      next: (response: Object) => {
        this.user = response as User;
        console.log('Inicio de sesión exitoso', this.user);
        const message = `Bienvenido, ${this.user.nombre} (${this.user.username})`;
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso ',
          text: message,
        });
        this.user.password = '';
        localStorage.setItem('actualUser', JSON.stringify(this.user));
        console.log(this.user.id_rol);
        if (this.user.id_rol == 1) {
          this.router.navigate(['/estudiante']);
          localStorage.setItem('tipoUser', 'Estudiante');
        } else if (this.user.id_rol == 3){
          this.router.navigate(['/admin']);
          localStorage.setItem('tipoUser', 'Administrador');

        }else {
          this.router.navigate(['/profe']);
          localStorage.setItem('tipoUser', 'Profesor');
        }
      },
      error: (error) => {
        console.error('Error al iniciar sesión', error);
        Swal.fire({
          icon: 'error',
          title: 'Error al iniciar sesión',
          text: error.error.error || 'Ha ocurrido un error inesperado.',
        });
      },
    });
  }
}

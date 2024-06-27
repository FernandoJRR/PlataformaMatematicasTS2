import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nombre!:string;
  username!:string;
  password!:string;
  user!: User ;
    constructor(
      private authService: AuthService,
      private router: Router
    ){}

  login() {
    console.log("nada");
    if (!this.username || !this.password) {
        Swal.fire({
            icon: 'error',
            title: 'Campos vacíos',
            text: 'Por favor, completa todos los campos.',
          });
          return;
        }

        
      
    }

}

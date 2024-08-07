import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  newUser!: User;
  nombreElement = document.getElementById('nombre');
  usernameElement = document.getElementById('username');
  passwordElement = document.getElementById('password');
  confipasswordElement = document.getElementById('confirmar_password');
  nombre!:string;
  username!: string;
  password!: string;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}


  email!: string;
  confirmPassword!: string;
  edad!: number;
  userType: number = 1; // Valor predeterminado

  registrar() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    const userNew: User ={
      nombre:  this.nombre ,
      username:this.username,
      password:this.password,
      id_rol: this.userType,
      //estado: 'No activo',
      //edad: this.edad,
      correo: this.email,

      
    };
    const user = {
      nombre:  this.nombre ,
      username:this.username,
      password:this.password,
      id_rol: this.userType,
      //estado: 'No activo',
      //edad: this.edad,
      correo: this.email,
    };
    console.log('Usuario registrado:', user);
    // Aquí puedes agregar la lógica para registrar el usuario, como hacer una llamada HTTP
    if (this.password == this.confirmPassword) {
      this.authService.singup(user)
    .subscribe((data)=>{
        console.log('Registrado con exito');
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Usuario registrado con exito",
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/login']);
        }, (error)=> {
        console.log('Error al registrarse');
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error al registrar el usuario",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      });
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error contraseñas no coinciden",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  }


}

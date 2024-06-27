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
  confirmar_password!: string;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}


  fullName!: string;
  email!: string;
  
  confirmPassword!: string;
  phone!: string;
  userType: string = 'alumno'; // Valor predeterminado

  registrar() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    const user = {
      fullName: this.fullName,
      email: this.email,
      username: this.username,
      password: this.password,
      phone: this.phone,
      userType: this.userType
    };
    console.log('Usuario registrado:', user);
    // Aquí puedes agregar la lógica para registrar el usuario, como hacer una llamada HTTP
  }

  /*registrar(){
    console.log("ingresando a metodo "+this.nombreElement)
    const userNew: User ={
      nombre:  this.nombre ,
      username:this.username,
      password:this.password,
      rol: 'No admin',
      estado: 'No activo',
      dinero_real: 0,
      moneda_virtual: 0
    };
    if (this.password == this.confirmar_password) {
      this.authService.singup(userNew)
    .subscribe((data)=>{
        console.log('Registrado con exito');
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Usuario registrado con exitp",
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
    
    }*/


}

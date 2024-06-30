import { Component } from '@angular/core';
import { GlobalsService } from '../../../globals/globals.service';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-perfil-admin',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  userName: string = 'John Doe';
  nombre: string = '';
  email: string = '0';
  role: string = 'Administrador'; 
  systemSettings: string = 'Configuraciones del sistema'; // Definir la propiedad
  globalStats: string = 'Estadísticas globales'; // Definir la propiedad
  isEditing: boolean = false;

  constructor(private globals: GlobalsService) {}
  user: User=this.globals.getUser()

  ngOnInit() {
    this.userName = this.user.username;
    this.email = this.user.correo;
    this.nombre=this.user.nombre;
    //this.role = this.user.id_rol;

  }
  onEdit() {
    this.isEditing = true;
  }

  onSave() {
    this.isEditing = false;
    // Aquí se podría agregar lógica para guardar los cambios
  }

  onCancel() {
    this.isEditing = false;
    // Aquí se podría agregar lógica para revertir los cambios
  }
}

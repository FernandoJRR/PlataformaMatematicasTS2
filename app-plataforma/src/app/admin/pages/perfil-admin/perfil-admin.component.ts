import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-admin',
  templateUrl: './perfil-admin.component.html',
  styleUrl: './perfil-admin.component.css'
})
export class PerfilAdminComponent {
  userName: string = 'John Doe';
  email: string = 'john.doe@example.com';
  role: string = 'Administrador'; 
  systemSettings: string = 'Configuraciones del sistema'; // Definir la propiedad
  globalStats: string = 'Estadísticas globales'; // Definir la propiedad
  isEditing: boolean = false;

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

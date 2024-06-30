import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material/material.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PerfilAdminComponent } from './pages/perfil-admin/perfil-admin.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeAdminComponent,
    ReportesComponent, 
    WelcomeComponent, PerfilAdminComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    CommonModule, 
    MaterialModule, 
    FormsModule
  ]
})
export class AdminModule { }

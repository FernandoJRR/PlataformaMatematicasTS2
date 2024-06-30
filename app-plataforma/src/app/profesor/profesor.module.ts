import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil-admin.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MaterialModule } from '../material/material/material.module';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProfesorRoutingModule } from './profesor-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    PerfilComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ProfesorRoutingModule
  ]
})
export class ProfesorModule { }

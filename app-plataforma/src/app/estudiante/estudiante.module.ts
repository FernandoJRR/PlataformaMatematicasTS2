import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './estudiante-routing.module';
import { MaterialModule } from '../material/material/material.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent
    
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
export class EstudianteModule { }

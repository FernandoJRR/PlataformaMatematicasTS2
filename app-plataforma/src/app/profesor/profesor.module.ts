import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil-admin.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MaterialModule } from '../material/material/material.module';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProfesorRoutingModule } from './profesor-routing.module';
import { TemarioComponent } from './pages/temario/temario.component';
import { TemaComponent } from './pages/tema/tema.component';
import { EjercicioComponent } from './pages/ejercicio/ejercicio.component';
import { PreguntaRespuestaComponent } from './pages/ejercicios/pregunta-respuesta/pregunta-respuesta.component';
import { OpcionMultipleComponent } from './pages/ejercicios/opcion-multiple/opcion-multiple.component';
import { UnirParejasComponent } from './pages/ejercicios/unir-parejas/unir-parejas.component';



@NgModule({
  declarations: [
    HomeComponent,
    PerfilComponent,
    WelcomeComponent,
    TemarioComponent,
    TemaComponent,
    EjercicioComponent,
    PreguntaRespuestaComponent,
    OpcionMultipleComponent,
    UnirParejasComponent
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

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

import { EditarTemarioComponent } from './pages/editar-temario/editar-temario.component';
import { EditarTemaDialog, EditarTemaComponent } from './pages/editar-tema/editar-tema.component';
import { EditarEjercicioComponent } from './pages/editar-ejercicio/editar-ejercicio.component';
import { MarkEditorComponent } from '../components/pages/mark-editor/mark-editor.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InformacionTemaComponent } from './pages/informacion-tema/informacion-tema.component';




@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
    PerfilComponent,
    TemarioComponent,
    TemaComponent,
    EjercicioComponent,
    PreguntaRespuestaComponent,
    OpcionMultipleComponent,
    UnirParejasComponent,

    EditarTemarioComponent,
    EditarTemaComponent,
    EditarEjercicioComponent,

    InformacionTemaComponent,

    //Componente de dialogo inyectado dentro de "editar-tema.component.ts"
    EditarTemaDialog, 
    EditarEjercicioComponent,
    /* Demas dialogs */ 

  ],
  imports: [
    MarkEditorComponent,
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ProfesorRoutingModule,
    MatDialogModule //Pinche error (componente dentro de "editar-tema.component.ts")
  ]
})
export class ProfesorModule { }
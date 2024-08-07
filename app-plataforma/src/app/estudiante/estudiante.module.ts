import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './estudiante-routing.module';
import { MaterialModule } from '../material/material/material.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil-admin.component';
import { JuegoPreguntaRespuestaComponent } from './pages/juegos/juego-pregunta-respuesta/juego-pregunta-respuesta.component';
import { JuegoUnirParejasComponent } from './pages/juegos/juego-unir-parejas/juego-unir-parejas.component';
import { JuegoComponent } from './pages/juegos/juego/juego.component';
import { JuegoOpcionMultipleComponent } from './pages/juegos/juego-opcion-multiple/juego-opcion-multiple.component';
import { EleccionJuegoComponent } from './pages/juegos/eleccion-juego/eleccion-juego.component';
import { ProgresoEstudianteComponent } from './pages/progreso-estudiante/progreso-estudiante.component';
import { LogrosComponent } from './pages/logros/logros.component';
import { RefuerzoComponent } from './pages/juegos/refuerzo/refuerzo.component';
import { InformacionTemaEstudianteComponent } from './pages/informacion-tema-estudiante/informacion-tema-estudiante.component';
import { MarkEditorComponent } from '../components/pages/mark-editor/mark-editor.component';

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
    PerfilComponent,
    EleccionJuegoComponent,    
    PerfilComponent,
    JuegoPreguntaRespuestaComponent,
    JuegoUnirParejasComponent,
    JuegoComponent,
    JuegoOpcionMultipleComponent,
    EleccionJuegoComponent,
    ProgresoEstudianteComponent,
    LogrosComponent,
    RefuerzoComponent,
    InformacionTemaEstudianteComponent

    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    CommonModule, 
    MaterialModule, 
    FormsModule,
    MarkEditorComponent
  ]
})
export class EstudianteModule { }
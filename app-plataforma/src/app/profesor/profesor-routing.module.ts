import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil-admin.component';
import { TemarioComponent } from './pages/temario/temario.component';

import { EditarTemarioComponent } from './pages/editar-temario/editar-temario.component';
import { EditarTemaComponent } from './pages/editar-tema/editar-tema.component';
import { EditarEjercicioComponent } from './pages/editar-ejercicio/editar-ejercicio.component';
import { InformacionTemaComponent } from './pages/informacion-tema/informacion-tema.component';
import { EstadisticasProfesorComponent } from './pages/estadisticas-profesor/estadisticas-profesor.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'perfil-profesor', 
        component: PerfilComponent
      },
      {
        path: 'nuevo-temario', 
        component: TemarioComponent
      },
      {
        path: 'editar-temario', 
        component: EditarTemarioComponent
      },
      {
        path: 'editar-tema', 
        component: EditarTemaComponent
      },
      {
        path: 'editar-ejercicio', 
        component: EditarEjercicioComponent
      },
      {
        path: 'informacion-tema', 
        component: InformacionTemaComponent
      },
      {
        path: 'estadisticas', 
        component: EstadisticasProfesorComponent
      },
      {
        path: '**', 
        component: WelcomeComponent
      }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfesorRoutingModule { }
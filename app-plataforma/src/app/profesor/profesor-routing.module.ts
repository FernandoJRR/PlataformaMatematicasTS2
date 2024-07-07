import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil-admin.component';
import { TemarioComponent } from './pages/temario/temario.component';



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

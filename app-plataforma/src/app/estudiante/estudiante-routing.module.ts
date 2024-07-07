import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil-admin.component';
<<<<<<< HEAD
import { EleccionJuegoComponent } from './pages/juegos/eleccion-juego/eleccion-juego.component';
import { JuegoComponent } from './pages/juegos/juego/juego.component';
import { ProgresoEstudianteComponent } from './pages/progreso-estudiante/progreso-estudiante.component';
import { ResultadosComponent } from './pages/juegos/resultados/resultados.component';
=======
>>>>>>> 562ad003b6176ac8bb52fbed4c4b0020a764a3da



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'perfil-estudiante', 
        component: PerfilComponent
      },
<<<<<<< HEAD
      {
        path: 'eleccion-juego', 
        component: EleccionJuegoComponent
      },
      {
        path: 'juego', 
        component: JuegoComponent
      },
      {
        path: 'progreso', 
        component: ProgresoEstudianteComponent
      },
      {
        path: 'resultados', 
        component: ResultadosComponent
      },
=======
>>>>>>> 562ad003b6176ac8bb52fbed4c4b0020a764a3da
      
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

export class AdminRoutingModule { }

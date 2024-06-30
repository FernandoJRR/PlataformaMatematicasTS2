import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      /*{
        path: 'perfil-admin', 
        component: PerfilAdminComponent
      },*/
      
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
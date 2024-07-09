import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PerfilAdminComponent } from './pages/perfil-admin/perfil-admin.component';
import { EstadisticasAdminComponent } from './pages/estadisticas-admin/estadisticas-admin.component';



const routes: Routes = [
  {
    path: '',
    component: HomeAdminComponent,
    children: [
      {
        path: 'perfil-admin', 
        component: PerfilAdminComponent
      },
      {
        path: 'estadisticas', 
        component: EstadisticasAdminComponent
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

export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)  
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)  
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./estudiante/estudiante.module').then(m => m.EstudianteModule)  
  },
  {
    path: 'profe',
    loadChildren: () => import('./profesor/profesor.module').then(m => m.ProfesorModule)  
  },
    {
    path: '**',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

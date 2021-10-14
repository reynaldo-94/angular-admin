// Este archivo es un modulo que va a tener la definicion de las rutas que estan internas en este directorio

import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { PagesComponent } from './pages.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';

const routes: Routes = [
  // Rutas protegidas
  {
    path: 'dashboard',
    component: PagesComponent,
    // Rutas Hijas
    // La ruta hija depende del padre
    children: [
      { path: '', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: Grafica1Component },
      // Si estoy en la ruta con el slash vacion redirecciona a dashboard
      // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }

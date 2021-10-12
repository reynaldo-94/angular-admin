// Este modulo va a estar enfocada en las rutas
import { NgModule } from '@angular/core';

// Importamos el modulo del Router
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

// Configuramos la ruta de mi aplicacion
const routes: Routes = [

  // Rutas protegidas
  {
    path: '',
    component: PagesComponent,
    // Rutas Hijas
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: Grafica1Component },
      // Si estoy en la ruta con el slash vacion redirecciona a dashboard
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },

  // Rutas publicas
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  // Navege a una ruta que no exista en la aplicacion
  { path: '**', component: NopagefoundComponent }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

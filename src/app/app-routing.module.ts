// Este modulo va a estar enfocada en las rutas
import { NgModule } from '@angular/core';

// Importamos el modulo del Router
import { RouterModule, Routes } from '@angular/router'
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

// Configuramos la ruta de mi aplicacion
const routes: Routes = [

  // path: '/dashboard' PagesRouting
  // path: '/auth' AuthRouting
  // path: '/medicos' MedicosRouting
  // path: '/compras' ComprasRouting

  // Path de ruta por defecto
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // Navege a una ruta que no exista en la aplicacion
  { path: '**', component: NopagefoundComponent }
]
@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

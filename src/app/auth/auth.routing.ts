// Este archivo es un modulo que va a tener la definicion de las rutas que estan internas en este directorio

import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }

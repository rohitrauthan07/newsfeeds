import { NgModule } from '@angular/core';;
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { SigninComponent } from '../signin/signin.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path:'Signin',component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,RegisterComponent]
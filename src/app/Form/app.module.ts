import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormService} from './form.service';
import { SigninComponent } from './signin/signin.component'
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent, canActivate: [AuthGuard] }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FormService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

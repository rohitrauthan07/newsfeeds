import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AppRoutingModule,routingComponents } from '../app/app-routing/app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { HeroimgComponent } from './heroimg/heroimg.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BodyComponent } from './body/body.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire';
import { ServicesService} from'./services.service';
import { AsyncPipe } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './auth.guard';
import {FormService} from './form.service';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
const appRoutes: Routes = [
  { path: 'home/:id', component: BodyComponent },
  // {path: 'home', component: AppComponent },
  { path: 'app-secondpage/:description',component: SecondpageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent, canActivate: [AuthGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroimgComponent,
    SidebarComponent,
    BodyComponent,
    SecondpageComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    routingComponents,
    SigninComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),
  ],
  providers: [ServicesService, AsyncPipe,FormService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

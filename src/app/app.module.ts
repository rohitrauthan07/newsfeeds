import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
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
const appRoutes: Routes = [
  { path: 'home/:id', component: BodyComponent },
   {path: 'home', component: AppComponent },
  { path: 'app-secondpage/:description',component: SecondpageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroimgComponent,
    SidebarComponent,
    BodyComponent,
    SecondpageComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [ServicesService, AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

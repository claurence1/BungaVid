import { HttpClientModule } from '@angular/common/http'; 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RegisteredComponent } from './registered/registered.component';
import { ListeFilmComponent } from './liste-film/liste-film.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { AuthGuardService } from './auth/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    RegisteredComponent,
    ListeFilmComponent,
    DetailFilmComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [CookieService, AuthGuardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
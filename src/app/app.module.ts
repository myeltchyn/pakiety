import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacketsModule } from './packets/packets/packets.module';
import { Http404Component } from './core/http404/http404.component';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CONFIG} from './model/config';
import { AuthModule } from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent,
    Http404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PacketsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule
  ],
  providers: [{provide:CONFIG,useValue:{baseUrl:'http://localhost'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }

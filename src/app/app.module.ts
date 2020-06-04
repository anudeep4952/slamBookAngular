import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ViewSlamsComponent } from './view-slams/view-slams.component';
import { WriteSlamComponent } from './write-slam/write-slam.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewSlamsComponent,
    WriteSlamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

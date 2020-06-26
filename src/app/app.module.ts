import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ViewSlamsComponent } from './components/view-slams/view-slams.component';
import { WriteSlamComponent } from './components/write-slam/write-slam.component';
import { SocialLoginModule, AuthServiceConfig, LoginOpt } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
const googleLoginOptions: LoginOpt = {
  scope: 'profile email'
};

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("332030758494-6ji8294bp9vkng4t0irts6odr2khnlde.apps.googleusercontent.com",googleLoginOptions)
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewSlamsComponent,
    WriteSlamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: AuthServiceConfig,
      useFactory: provideConfig,

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

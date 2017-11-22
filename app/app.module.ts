import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  AuthFormModule,
  AuthRememberComponent
} from './auth-form/';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthRememberComponent
  ],
  imports: [
    BrowserModule,
    AuthFormModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

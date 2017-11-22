import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthFormModule } from './auth-form/auth-form.module';
import { AuthRememberComponent } from './auth-form/auth-remember.component';

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

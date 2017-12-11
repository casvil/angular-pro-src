import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MailModule } from './mail/mail.module';

import { AppComponent } from './app.component';

export const ROUTES: Routes = [
  { path: '**', redirectTo: 'folder/inbox' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MailModule,
<<<<<<< HEAD
    RouterModule.forRoot(ROUTES)
=======
    RouterModule.forRoot(ROUTES, { enableTracing: true })
>>>>>>> 93ec2673048a02f569a05306d7779a21c25f0f39
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

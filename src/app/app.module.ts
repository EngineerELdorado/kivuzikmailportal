import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SendMailComponent } from './send-mail/send-mail.component';
import { NgxSpinnerModule } from 'ngx-spinner';
const appRoutes: Routes = [
  
  {path:'', component:LoginComponent},
  { path: 'users', component: UsersComponent },
  { path: 'sendMail', component: SendMailComponent },
  
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    SendMailComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

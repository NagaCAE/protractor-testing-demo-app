import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoginComponent} from './components/login/login.component';
import {ShellComponent} from './components/shell/shell.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AppRoutingModule} from './app.routing.module';
import {FormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import {NonauthGuard} from './guards/nonauth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShellComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    NonauthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

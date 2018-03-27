import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ShellComponent} from './components/shell/shell.component';
import {AuthGuard} from './guards/auth.guard';
import {NonauthGuard} from './guards/nonauth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'app',
    component: ShellComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
    ],
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent, canActivate: [NonauthGuard] },
  { path: '**', redirectTo: '/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }



import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  error = '';
  loginInProgress = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    this.error = '';
    this.loginInProgress = true;

    this.authService.authorize(this.username, this.password).subscribe(
      success => {
        this.router.navigate(['app/dashboard']);
      }, error => {
        this.error = error;
        this.loginInProgress = false;
      }
    );
  }
}

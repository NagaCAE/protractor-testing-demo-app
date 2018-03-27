import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

const CORRECT_USERNAME = 'correct';
const CORRECT_PASSWORD = 'correct';
const TOKEN = 'abcdef123';

@Injectable()
export class AuthService {
  constructor() {
  }

  authorize(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>(observer => {

      setTimeout(() => {
        if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
          localStorage.setItem('token', TOKEN);

          observer.next(true);
          observer.complete();
        } else {
          observer.error('Incorrect username or password');
          observer.complete();
        }
      }, 600);

    });
  }

  unauthorize() {
    localStorage.removeItem('token');
  }

  isAuthorized() {
    return !!localStorage.getItem('token');
  }
}

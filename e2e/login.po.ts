import {browser, element, by} from 'protractor';

export class LoginPage {
  get usernameLabel() {
    return element(by.css('.login-field:nth-child(1) label'));
  }

  get username() {
    return element(by.id('username'));
  }

  get passwordLabel() {
    return element(by.css('.login-field:nth-child(2) label'));
  }

  get password() {
    return element(by.id('password'));
  }

  get errorMessage() {
    return element(by.className('login-error'));
  }

  get signIn() {
    return element(by.className('login__button'));
  }

  trySignIn(username: string, password: string) {
    this.username.sendKeys(username);
    this.password.sendKeys(password);
    this.signIn.click();
  }
}

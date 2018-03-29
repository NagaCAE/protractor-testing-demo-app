import {browser, protractor} from 'protractor';
import {LoginPage} from './login.po';
import {DashboardPage} from './dashboard.po';

describe('Login page', () => {
  let page: LoginPage;
  const EC = protractor.ExpectedConditions;

  beforeEach(() => {
    page = new LoginPage();
    browser.get('/login');
  });

  it('should have correct titles and button text', () => {
    expect(page.usernameLabel.getText()).toEqual('Username');
    expect(page.passwordLabel.getText()).toEqual('Password');
    expect(page.signIn.getText()).toEqual('Sign in');
  });

  it ('should display an error message to user if he provided incorrect credentials', () => {
    page.trySignIn('123', '123');
    browser.wait(EC.visibilityOf(page.errorMessage));
    expect(page.errorMessage.getText()).toEqual('Incorrect username or password');
  });

  it ('should redirect user to the dashboard page if he provided correct credentials', () => {
    const dashboardPage = new DashboardPage();
    page.trySignIn('correct', 'correct');
    browser.wait(EC.visibilityOf(dashboardPage.title));
    expect(dashboardPage.title.isPresent()).toBeTruthy();
  });
});

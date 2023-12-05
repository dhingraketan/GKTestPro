import { Injectable } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.dev';
import { User } from './User';
import { TestCase } from './TestCase';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  navigateToAddUser() {
    this.router.navigate(['landing-page/add-user']);
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }

  navigateToTestBank() {
    this.router.navigate(['landing-page/test-bank']);
  }

  navigateToSettings() {
    this.router.navigate(['landing-page/settings']);
  }

  navigateToDash() {
    this.router.navigate(['landing-page/dash']);
  }

  navigateToAddTestCase() {
    this.router.navigate(['landing-page/add-test-case']);
  }

  addTestCase(testCase: TestCase) {
    let url = environment.TEST_CASE_BASE_URL + environment.TEST_CASE.ADD_TEST_CASE;
    return this.httpClient.post(url, testCase);
  }

  addUser(user: User) {
    let url = environment.USER_BASE_URL + environment.USER.ADD_USER;
    return this.httpClient.post(url, user);
  }

  login(credentials: any) {
    let url = environment.USER_BASE_URL + environment.USER.LOGIN;
    return this.httpClient.post(url, credentials, { withCredentials: true });
  }

  checkAuth() {
    let url = environment.USER_BASE_URL + environment.USER.CHECK_AUTH;
    return this.httpClient.get(url, { withCredentials: true });
  }

  isAutheresied(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.checkAuth().subscribe(
        (data: any) => {
          const result = data;
          resolve(result);
        },
        (error: any) => {
          alert("Error checking authentication!" + error);
          resolve(false);
        }
      );
    });
  }

  logout(){
    let url = environment.USER_BASE_URL + environment.USER.LOGOUT;
    return this.httpClient.get(url, { withCredentials: true });
  }
  

}

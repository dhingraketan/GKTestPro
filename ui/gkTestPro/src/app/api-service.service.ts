import { Injectable, EventEmitter } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.dev';
import { User } from './User';
import { TestCase } from './TestCase';
import { FullTestCase } from './FullTestCase';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  nextCaseEvent = new EventEmitter<FullTestCase>();
  prevCaseEvent = new EventEmitter<FullTestCase>();
  takeTestEvent = new EventEmitter<FullTestCase>();
  updateListEvent = new EventEmitter<FullTestCase>();

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

  navigateToImportCases() {
    this.router.navigate(['landing-page/settings/import']);
  }

  toTestCase(testCase: FullTestCase) {
    this.router.navigate(['landing-page/test-bank/test-case'], {state: {data: testCase}});
  }

  toTestCaseOverview(testCase: FullTestCase) {
    this.router.navigate(['landing-page/test-bank/test-case/ovw'], {state: {data: testCase}});
  }

  toTestCaseHistory(testCase: FullTestCase) {
    this.router.navigate(['landing-page/test-bank/test-case/history'], {state: {data: testCase}});
  }

  toEditTestCase(testCase: FullTestCase) {
    this.router.navigate(['landing-page/edit'], {state: {data: testCase}});
  }

  addTestCase(testCase: TestCase) {
    let url = environment.TEST_CASE_BASE_URL + environment.TEST_CASE.ADD_TEST_CASE;
    return this.httpClient.post(url, testCase);
  }

  importTestCases(uploadedFile: File){
    let url = environment.TEST_CASE_BASE_URL + environment.TEST_CASE.IMPORT_TEST_CASES;
    const formData = new FormData();
    formData.append('file', uploadedFile);
    return this.httpClient.post(url, formData);
  }

  getTestCases(page: number, limit: number, search: string) {
    let url = environment.TEST_CASE_BASE_URL + environment.TEST_CASE.GET_TEST_CASES;
    return this.httpClient.get(url + '?page=' + page + '&limit=' + limit + '&search=' + search);
  }

  addUser(user: User) {
    let url = environment.USER_BASE_URL + environment.USER.ADD_USER;
    return this.httpClient.post(url, user);
  }

  editTestCase(testCase: FullTestCase) {
    let url = environment.TEST_CASE_BASE_URL + environment.TEST_CASE.EDIT_TEST_CASE;
    return this.httpClient.put(url, testCase);
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

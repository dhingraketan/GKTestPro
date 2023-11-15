import { Injectable } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.dev';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  

  constructor( private httpClient: HttpClient) { }

  navigateToAddUser() {
    // this.router.navigate(['landing-page/add-user']);
  }

  navigateToSettings() {
    // this.router.navigate(['landing-page/settings']);
  }

  addUser(user: User) {
    let url = environment.USER_BASE_URL + environment.USER.ADD_USER;
    return this.httpClient.post(url, user);
  }

}

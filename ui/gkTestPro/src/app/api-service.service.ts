import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private router: Router) { }

  navigateToAddUser() {
    this.router.navigate(['landing-page/add-user']);
  }

  navigateToSettings() {
    this.router.navigate(['landing-page/settings']);
  }

  addUser(userInfo: any) {
    console.log(userInfo);
  }
}

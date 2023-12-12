import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-settings-main',
  templateUrl: './settings-main.component.html',
  styleUrls: ['./settings-main.component.css']
})
export class SettingsMainComponent {

  constructor(private apiService: ApiServiceService) { }

  toAddUser(): void{
    if (localStorage.getItem("role") == "admin") {
      this.apiService.navigateToAddUser();
    } else{
      alert("You are not authorized to add users!");
    }
  }

  toImportCases() {
    if (localStorage.getItem("role") == "jt") {
      alert("You are not authorized to import test cases!");
    }else {
      this.apiService.navigateToImportCases();
    }
  }

}

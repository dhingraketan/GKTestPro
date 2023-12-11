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
    this.apiService.navigateToAddUser();
    console.log("toAddUser");
  }

  toImportCases() {
    this.apiService.navigateToImportCases();
  }

}

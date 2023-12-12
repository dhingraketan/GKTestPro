import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private apiService: ApiServiceService) { }

  logout() {
    localStorage.removeItem("role");
    this.apiService.logout().subscribe(
      (data: any) => {
        this.apiService.navigateToLogin();
      });
  }
}

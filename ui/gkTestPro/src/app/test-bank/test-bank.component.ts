import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-test-bank',
  templateUrl: './test-bank.component.html',
  styleUrls: ['./test-bank.component.css']
})
export class TestBankComponent {

  constructor(private apiService: ApiServiceService) { }

  toAddTestCase() {
    if (this.apiService.checkAuth()) {
      this.apiService.navigateToAddTestCase();
    } else {
      this.apiService.navigateToLogin();
    }
  }

}

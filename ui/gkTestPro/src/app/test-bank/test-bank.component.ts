import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { FullTestCase } from '../FullTestCase';

@Component({
  selector: 'app-test-bank',
  templateUrl: './test-bank.component.html',
  styleUrls: ['./test-bank.component.css']
})
export class TestBankComponent implements OnInit {

  testResult: any;
  testCases!: FullTestCase[];
  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.apiService.getTestCases().subscribe((data: any) => {
      this.testResult = data;
      this.testCases = this.testResult;
    });
  }

  toAddTestCase() {
    if (this.apiService.checkAuth()) {
      this.apiService.navigateToAddTestCase();
    } else {
      this.apiService.navigateToLogin();
    }
  }

  toTestCase(test: FullTestCase) {
    this.apiService.toTestCase(test);
  }

}

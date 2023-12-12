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
  constructor(private apiService: ApiServiceService) {
    this.apiService.nextCaseEvent.subscribe((data: FullTestCase) => {
      let index = this.findIndex(data);
      if (index < this.testCases.length - 1) {
        this.apiService.takeTestEvent.emit(this.testCases[index + 1]);
      }
    });

    this.apiService.prevCaseEvent.subscribe((data: FullTestCase) => {
      let index = this.findIndex(data);
      if (index > 0) {
        this.apiService.takeTestEvent.emit(this.testCases[index - 1]);
      }
    });

    this.apiService.updateListEvent.subscribe((testCase: FullTestCase) => {
      let index = this.findIndex(testCase);
      this.testCases = []
      this.apiService.getTestCases().subscribe((data: any) => {
        this.testResult = data;
        this.testCases = this.testResult;
      });

      this.apiService.toTestCase(testCase);

    });
  }

  findIndex(testCase: FullTestCase) {
    for (let i = 0; i < this.testCases.length; i++) {
      if (testCase.id == this.testCases[i].id) {
        return i;
      }
    }
    return -1;
  }

  ngOnInit() {
    this.apiService.getTestCases().subscribe((data: any) => {
      this.testResult = data;
      this.testCases = this.testResult;
    });
  }

  toAddTestCase() {
    if (localStorage.getItem("role") == "jt") {
      alert("You are not authorized to add test cases!");
    } else {
      if (this.apiService.checkAuth()) {
        this.apiService.navigateToAddTestCase();
      } else {
        this.apiService.navigateToLogin();
      }
    }
  }

  toTestCase(test: FullTestCase) {
    this.apiService.toTestCase(test);
  }


}

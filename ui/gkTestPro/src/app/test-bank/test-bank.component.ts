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
  currentPage: number = 1;
  pageLimit: number = 30;
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
      this.apiService.getTestCases(this.currentPage,this.pageLimit, '').subscribe((data: any) => {
        this.testResult = data;
        this.testCases = this.testResult.result;
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
    this.apiService.getTestCases(this.currentPage,this.pageLimit, '').subscribe((data: any) => {
      this.testResult = data;
      this.testCases = this.testResult.result;
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

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.apiService.getTestCases(this.currentPage,this.pageLimit, '').subscribe((data: any) => {
        this.testResult = data;
        this.testCases = this.testResult.result;
      });
    }
  }

  nextPage() {
    if (this.currentPage <= this.testResult.pages) {
      this.currentPage++;
      this.apiService.getTestCases(this.currentPage,this.pageLimit, '').subscribe((data: any) => {
        this.testResult = data;
        this.testCases = this.testResult.result;
      });
    }
  }

  onSearch(event: any): void {

    var search = event.target.value;
    this.apiService.getTestCases(this.currentPage,this.pageLimit, search).subscribe((data: any) => {
      this.testResult = data;
      this.testCases = this.testResult.result;
    });
  }

}

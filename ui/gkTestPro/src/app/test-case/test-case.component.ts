import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { FullTestCase } from '../FullTestCase';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-case',
  templateUrl: './test-case.component.html',
  styleUrls: ['./test-case.component.css']
})
export class TestCaseComponent implements OnInit{

  constructor(private apiService: ApiServiceService, private route: ActivatedRoute) { 
    this.apiService.takeTestEvent.subscribe((data: FullTestCase) => {
      this.testCase = data;
    });
  }

  testCase!: FullTestCase;

  ngOnInit(): void {
    this.testCase = history.state.data;
    this.apiService.toTestCaseOverview(this.testCase);
  }

  toOvw() { 
    this.apiService.toTestCaseOverview(this.testCase);
  }

  toHistory() {
    this.apiService.toTestCaseHistory(this.testCase);
  }

  toNextCase() {
    this.apiService.nextCaseEvent.emit(this.testCase);
  }

  toPrevCase() {
    this.apiService.prevCaseEvent.emit(this.testCase);
  }

  toEditTestCase() {
    this.apiService.toEditTestCase(this.testCase);
  }

}

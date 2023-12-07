import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { FullTestCase } from '../FullTestCase';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-case-executions',
  templateUrl: './test-case-executions.component.html',
  styleUrls: ['./test-case-executions.component.css']
})
export class TestCaseExecutionsComponent implements OnInit{

  constructor(private apiService: ApiServiceService, private route: ActivatedRoute) { 
    this.apiService.takeTestEvent.subscribe((data: FullTestCase) => {
      this.testCase = data;
    });
  }

  testCase!: FullTestCase;
  executionHistory!: any[];

  ngOnInit(): void {
    this.testCase = history.state.data;
    this.executionHistory = this.testCase.executionHistory;
  }
}

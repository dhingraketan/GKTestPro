import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { FullTestCase } from '../FullTestCase';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-case-overview',
  templateUrl: './test-case-overview.component.html',
  styleUrls: ['./test-case-overview.component.css']
})
export class TestCaseOverviewComponent implements OnInit{

  constructor(private apiService: ApiServiceService, private route: ActivatedRoute) { }

  testCase!: FullTestCase;

  ngOnInit(): void {
    this.testCase = history.state.data;
  }
}

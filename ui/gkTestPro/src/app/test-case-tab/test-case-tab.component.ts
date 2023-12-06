import { Component, Input, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { FullTestCase } from '../FullTestCase';

@Component({
  selector: 'app-test-case-tab',
  templateUrl: './test-case-tab.component.html',
  styleUrls: ['./test-case-tab.component.css']
})
export class TestCaseTabComponent  implements OnInit{

  @Input() test!: FullTestCase;

  constructor(private apiService: ApiServiceService) { }

  project: String = "NO DATA";
  baseline: String = "NO DATA";
  result: String = "NO DATA";
  timestamp: String = "NO DATA";
  executedBy: String = "NO DATA";



  ngOnInit(): void {

    if(this.test.executionHistory.length > 0){
      this.project = this.test.executionHistory[0].projectId;
      this.baseline = this.test.executionHistory[0].baselineId;
      this.result = this.test.executionHistory[0].result;
      this.timestamp = this.test.executionHistory[0].timestamp;
      this.executedBy = this.test.executionHistory[0].executedBy;
    }
  }

}

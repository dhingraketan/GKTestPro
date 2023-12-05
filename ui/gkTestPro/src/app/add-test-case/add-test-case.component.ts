import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { TestCase } from '../TestCase';

@Component({
  selector: 'app-add-test-case',
  templateUrl: './add-test-case.component.html',
  styleUrls: ['./add-test-case.component.css']
})
export class AddTestCaseComponent implements OnInit {
  testCaseForm!: FormGroup;

  constructor(private apiService:  ApiServiceService,private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.testCaseForm = this.formBuilder.group({
      title: ['', Validators.required],
      summary: ['', Validators.required],
      preconditions: ['', Validators.required],
      steps: ['', Validators.required],
      expectedResults: ['', Validators.required],
    });
  }
  //Make a TestCase object and call the api service dfunction to add the test case when the form is submitted
  onSubmit() {
    let title = this.testCaseForm.get('title')?.value;
    let summary = this.testCaseForm.get('summary')?.value;
    let preCons = this.testCaseForm.get('preconditions')?.value;
    let steps = this.testCaseForm.get('steps')?.value;
    let expectedResult = this.testCaseForm.get('expectedResults')?.value;

    let testCase = new TestCase();
    testCase.title = title;
    testCase.summary = summary;
    testCase.preCons = preCons;
    testCase.steps = steps;
    testCase.expectedResult = expectedResult;

    this.apiService.addTestCase(testCase).subscribe(
      (data: any) => {
        alert("Success" + data.msg)
        this.apiService.navigateToAddTestCase();
      },
      (error: any) => {
        alert("Error" + error.error.msg);
      }
    );
  }

  //when the cancel button is clicked, navigate to the test bank page
  onCancel() {
    this.apiService.navigateToTestBank();
  }
}

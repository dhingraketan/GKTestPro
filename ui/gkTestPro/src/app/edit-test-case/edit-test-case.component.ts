import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { TestCase } from '../TestCase';
import { FullTestCase } from '../FullTestCase';

@Component({
  selector: 'app-edit-test-case',
  templateUrl: './edit-test-case.component.html',
  styleUrls: ['./edit-test-case.component.css']
})
export class EditTestCaseComponent implements OnInit{
  testCaseForm!: FormGroup;
  testCase!: FullTestCase;

  constructor(private apiService:  ApiServiceService,private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.testCase = history.state.data;
    this.testCaseForm = this.formBuilder.group({
      title: [this.testCase.title, Validators.required],
      summary: [this.testCase.summary, Validators.required],
      preconditions: [this.testCase.preCons, Validators.required],
      steps: [this.testCase.steps, Validators.required],
      expectedResults: [this.testCase.expectedResult, Validators.required],
    });

  }
  //Make a TestCase object and call the api service dfunction to add the test case when the form is submitted
  onSubmit() {
    let title = this.testCaseForm.get('title')?.value;
    let summary = this.testCaseForm.get('summary')?.value;
    let preCons = this.testCaseForm.get('preconditions')?.value;
    let steps = this.testCaseForm.get('steps')?.value;
    let expectedResult = this.testCaseForm.get('expectedResults')?.value;

    this.testCase.title = title;
    this.testCase.summary = summary;
    this.testCase.preCons = preCons;
    this.testCase.steps = steps;
    this.testCase.expectedResult = expectedResult;


    this.apiService.editTestCase(this.testCase).subscribe(
      (data: any) => {
        alert("Success: " + data.msg)
        this.apiService.updateListEvent.emit(this.testCase);
      },
      (error: any) => {
        alert("Error: " + error.error.msg);
      }
    );
  }

  //when the cancel button is clicked, navigate to the test case page
  onCancel() {
    this.apiService.updateListEvent.emit(this.testCase);
  }
}

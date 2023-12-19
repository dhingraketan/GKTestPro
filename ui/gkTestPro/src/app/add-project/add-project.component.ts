import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../Project';
import { ApiServiceService } from '../api-service.service';



@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  projectForm!: FormGroup;

  constructor(private apiService: ApiServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      title: ['', Validators.required],
      baseline: ['', Validators.required]
    });
  }

  onSubmit() {
    let title = this.projectForm.get('title')?.value;
    let baseline = this.projectForm.get('baseline')?.value;
    let testSuites:string[] = [];
    this.apiService.createBaseline(baseline, testSuites).subscribe(
      (data: any) => {
        let baselineId = data.id;
        let baselines:string[] = [];
        let ownerId = localStorage.getItem("name");
        //wait for baseline to be created
        setTimeout(() => {
          baselines.push(baselineId);
          let project = new Project();
          project.title = title;
          project.ownerId = ownerId!;
          project.baselines = baselines;
          this.apiService.createProject(project).subscribe(
            (data: any) => {
              console.log("project created");
              this.apiService.navigateToDash();
            },
            (error: any) => {
              alert("Error" + error.error.msg);
            }
          );
        }, 1000);
      },
      (error: any) => {
        alert("Error" + error.error.msg);
      }
    ); 
  }

  onCancel() {}

}

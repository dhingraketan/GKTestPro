import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../Project';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-project-tab',
  templateUrl: './project-tab.component.html',
  styleUrls: ['./project-tab.component.css']
})
export class ProjectTabComponent  implements OnInit{

  @Input() project!: Project;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
  }

  toBaselines(project: Project) {
    this.apiService.toBaselineList(project.baselines);
  }

}

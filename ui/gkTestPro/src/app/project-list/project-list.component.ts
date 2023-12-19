import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Project } from '../Project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit{

  search: string = '';
  projectResult: any;
  projects: Project[] = [];
  currentPage: number = 1;
  pageLimit: number = 30;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.apiService.getProjects(this.currentPage,this.pageLimit, this.search).subscribe((data: any) => {
      this.projectResult = data;
      this.projects = this.projectResult.result;
    });
  }

  toProject(project: Project) {
    this.apiService.toProjectOverview(project);
  }

  onSearch(event: any): void {

    this.search = event.target.value;
    this.apiService.getProjects(this.currentPage,this.pageLimit, this.search).subscribe((data: any) => {
      this.projectResult = data;
      this.projects = this.projectResult.result;
    });
  }

}

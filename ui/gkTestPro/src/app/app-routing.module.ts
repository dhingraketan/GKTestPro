import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { TestRunListComponent } from './test-run-list/test-run-list.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'project-overview', component: ProjectOverviewComponent },
  { path: 'projects', component: ProjectListComponent},
  { path: 'test-runs', component: TestRunListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

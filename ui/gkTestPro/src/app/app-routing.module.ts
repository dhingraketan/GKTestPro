import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { TestRunListComponent } from './test-run-list/test-run-list.component';
import { TestPlanListComponent } from './test-plan-list/test-plan-list.component';
import { TestPlanOverviewComponent } from './test-plan-overview/test-plan-overview.component';
import { TestBankComponent } from './test-bank/test-bank.component';
import { SettingsMainComponent } from './settings-main/settings-main.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'project-overview', component: ProjectOverviewComponent },
  { path: 'projects', component: ProjectListComponent},
  { path: 'test-runs', component: TestRunListComponent},
  { path: 'test-plans', component: TestPlanListComponent},
  { path: 'test-plans/test-plan-overview', component: TestPlanOverviewComponent},
  { path: 'test-bank', component: TestBankComponent},
  { path: 'settings', component: SettingsMainComponent},
  { path: 'profile', component: ProfilePageComponent},
  { path: 'profile/settings', component: SettingsMainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
import { TestCaseOverviewComponent } from './test-case-overview/test-case-overview.component';
import { TestCaseComponent } from './test-case/test-case.component';
import { TestCaseExecutionsComponent } from './test-case-executions/test-case-executions.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddTestCaseComponent } from './add-test-case/add-test-case.component';
import { EditTestCaseComponent } from './edit-test-case/edit-test-case.component';
import { ImportWindowComponent } from './import-window/import-window.component';

const routes: Routes = [
  {
    path: 'landing-page', component: LandingPageComponent, children: [
    {
      path: 'dash', component: DashboardComponent
    },{
      path: 'project-overview', component: ProjectOverviewComponent
    },{
      path: 'projects', component: ProjectListComponent
    }, {
      path: 'test-runs', component: TestRunListComponent
    }, {
      path: 'test-plans', component: TestPlanListComponent
    }, {
      path: 'test-plans/test-plan-overview', component: TestPlanOverviewComponent
    }, {
      path: 'test-bank', component: TestBankComponent
    }, {
      path: 'settings', component: SettingsMainComponent
    }, {
      path: 'profile', component: ProfilePageComponent
    }, {
      path: 'profile/settings', component: SettingsMainComponent
    }, {
      path: 'test-bank/test-case', component: TestCaseComponent, children: [{ path: 'ovw', component: TestCaseOverviewComponent }, { path: 'history', component: TestCaseExecutionsComponent }]
    }, {
      path: 'add-user', component: AddUserComponent
    }, {
      path: 'add-test-case', component: AddTestCaseComponent
    }, { 
      path: 'edit', component: EditTestCaseComponent 
    }, {
      path: 'settings/import', component: ImportWindowComponent
    }
  ]
  },
  { path: 'login', component: LoginPageComponent},
  { path: '', redirectTo:'/login', pathMatch: 'full'} // set it as default
  // ,{ path: 'project-overview', component: ProjectOverviewComponent },
  // { path: 'projects', component: ProjectListComponent},
  // { path: 'test-runs', component: TestRunListComponent},
  // { path: 'test-plans', component: TestPlanListComponent},
  // { path: 'test-plans/test-plan-overview', component: TestPlanOverviewComponent},
  // { path: 'test-bank', component: TestBankComponent},
  // { path: 'settings', component: SettingsMainComponent},
  // { path: 'profile', component: ProfilePageComponent},
  // { path: 'profile/settings', component: SettingsMainComponent},
  // { path: 'test-bank/test-case', component: TestCaseComponent, children: [ { path: 'ovw', component: TestCaseOverviewComponent }, {path: 'history', component: TestCaseExecutionsComponent} ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

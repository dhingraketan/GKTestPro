import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import  {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import  {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectTabComponent } from './project-tab/project-tab.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { TestRunTabComponent } from './test-run-tab/test-run-tab.component';
import { TestRunListComponent } from './test-run-list/test-run-list.component';
import { TestPlanTabComponent } from './test-plan-tab/test-plan-tab.component';
import { TestPlanListComponent } from './test-plan-list/test-plan-list.component';
import { TestPlanOverviewComponent } from './test-plan-overview/test-plan-overview.component';
import { TestBankComponent } from './test-bank/test-bank.component';
import { TestCaseTabComponent } from './test-case-tab/test-case-tab.component';
import { SettingsMainComponent } from './settings-main/settings-main.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { TestCaseOverviewComponent } from './test-case-overview/test-case-overview.component';
import { TestCaseExecutionsComponent } from './test-case-executions/test-case-executions.component';
import { TestCaseComponent } from './test-case/test-case.component';
import { ExecutionTileComponent } from './execution-tile/execution-tile.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ProjectOverviewComponent,
    ProjectTabComponent,
    SidebarComponent,
    ProjectListComponent,
    TestRunTabComponent,
    TestRunListComponent,
    TestPlanTabComponent,
    TestPlanListComponent,
    TestPlanOverviewComponent,
    TestBankComponent,
    TestCaseTabComponent,
    SettingsMainComponent,
    ProfilePageComponent,
    TestCaseOverviewComponent,
    TestCaseExecutionsComponent,
    TestCaseComponent,
    ExecutionTileComponent,
    LoginPageComponent,
    LandingPageComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

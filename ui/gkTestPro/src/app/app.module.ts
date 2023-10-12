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
    TestCaseTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

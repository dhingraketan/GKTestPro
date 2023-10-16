import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCaseOverviewComponent } from './test-case-overview.component';

describe('TestCaseOverviewComponent', () => {
  let component: TestCaseOverviewComponent;
  let fixture: ComponentFixture<TestCaseOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCaseOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCaseOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCaseExecutionsComponent } from './test-case-executions.component';

describe('TestCaseExecutionsComponent', () => {
  let component: TestCaseExecutionsComponent;
  let fixture: ComponentFixture<TestCaseExecutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCaseExecutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestCaseExecutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

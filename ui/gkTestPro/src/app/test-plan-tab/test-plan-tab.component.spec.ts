import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPlanTabComponent } from './test-plan-tab.component';

describe('TestPlanTabComponent', () => {
  let component: TestPlanTabComponent;
  let fixture: ComponentFixture<TestPlanTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPlanTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPlanTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

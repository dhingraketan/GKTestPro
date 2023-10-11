import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRunTabComponent } from './test-run-tab.component';

describe('TestRunTabComponent', () => {
  let component: TestRunTabComponent;
  let fixture: ComponentFixture<TestRunTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRunTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRunTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

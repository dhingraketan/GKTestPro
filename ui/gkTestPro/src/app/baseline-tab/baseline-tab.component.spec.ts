import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselineTabComponent } from './baseline-tab.component';

describe('BaselineTabComponent', () => {
  let component: BaselineTabComponent;
  let fixture: ComponentFixture<BaselineTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaselineTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaselineTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

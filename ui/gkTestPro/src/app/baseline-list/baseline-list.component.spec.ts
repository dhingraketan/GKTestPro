import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselineListComponent } from './baseline-list.component';

describe('BaselineListComponent', () => {
  let component: BaselineListComponent;
  let fixture: ComponentFixture<BaselineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaselineListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaselineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

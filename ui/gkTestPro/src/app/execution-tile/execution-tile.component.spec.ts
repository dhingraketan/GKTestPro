import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionTileComponent } from './execution-tile.component';

describe('ExecutionTileComponent', () => {
  let component: ExecutionTileComponent;
  let fixture: ComponentFixture<ExecutionTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutionTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutionTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

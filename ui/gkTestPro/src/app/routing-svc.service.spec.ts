import { TestBed } from '@angular/core/testing';

import { RoutingSvcService } from './routing-svc.service';

describe('RoutingSvcService', () => {
  let service: RoutingSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LifeatcircleService } from './lifeatcircle.service';

describe('LifeatcircleService', () => {
  let service: LifeatcircleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LifeatcircleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

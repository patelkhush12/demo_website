import { TestBed } from '@angular/core/testing';

import { Landingpage1Service } from './landingpage1.service';

describe('Landingpage1Service', () => {
  let service: Landingpage1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Landingpage1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LandingpageResolver } from './landingpage.resolver';

describe('LandingpageResolver', () => {
  let resolver: LandingpageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LandingpageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

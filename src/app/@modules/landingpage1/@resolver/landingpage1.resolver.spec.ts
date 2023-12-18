import { TestBed } from '@angular/core/testing';

import { Landingpage1Resolver } from './landingpage1.resolver';

describe('Landingpage1Resolver', () => {
  let resolver: Landingpage1Resolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(Landingpage1Resolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

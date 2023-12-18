import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPage1Component } from './landing-page1.component';

describe('LandingPage1Component', () => {
  let component: LandingPage1Component;
  let fixture: ComponentFixture<LandingPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPage1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

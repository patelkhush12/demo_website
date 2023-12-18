import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBannerV1Component } from './side-banner-v1.component';

describe('SideBannerV1Component', () => {
  let component: SideBannerV1Component;
  let fixture: ComponentFixture<SideBannerV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBannerV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBannerV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

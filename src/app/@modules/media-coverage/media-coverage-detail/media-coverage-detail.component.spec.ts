import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCoverageDetailComponent } from './media-coverage-detail.component';

describe('MediaCoverageDetailComponent', () => {
  let component: MediaCoverageDetailComponent;
  let fixture: ComponentFixture<MediaCoverageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaCoverageDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaCoverageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

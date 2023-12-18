import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWithPageTitleComponent } from './image-with-page-title.component';

describe('ImageWithPageTitleComponent', () => {
  let component: ImageWithPageTitleComponent;
  let fixture: ComponentFixture<ImageWithPageTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageWithPageTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageWithPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

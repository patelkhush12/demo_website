import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomBarShareNCategoryComponent } from './bottom-bar-share-n-category.component';

describe('BottomBarShareNCategoryComponent', () => {
  let component: BottomBarShareNCategoryComponent;
  let fixture: ComponentFixture<BottomBarShareNCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomBarShareNCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomBarShareNCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

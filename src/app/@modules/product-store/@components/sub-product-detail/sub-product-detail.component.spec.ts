import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProductDetailComponent } from './sub-product-detail.component';

describe('SubProductDetailComponent', () => {
  let component: SubProductDetailComponent;
  let fixture: ComponentFixture<SubProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubProductDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

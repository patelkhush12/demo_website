import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubservicesDetailComponent } from './subservices-detail.component';

describe('SubservicesDetailComponent', () => {
  let component: SubservicesDetailComponent;
  let fixture: ComponentFixture<SubservicesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubservicesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubservicesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

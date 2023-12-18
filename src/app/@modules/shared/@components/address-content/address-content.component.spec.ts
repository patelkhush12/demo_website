import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressContentComponent } from './address-content.component';

describe('AddressContentComponent', () => {
  let component: AddressContentComponent;
  let fixture: ComponentFixture<AddressContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

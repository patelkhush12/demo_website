import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepExpertiseComponent } from './deep-expertise.component';

describe('DeepExpertiseComponent', () => {
  let component: DeepExpertiseComponent;
  let fixture: ComponentFixture<DeepExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeepExpertiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

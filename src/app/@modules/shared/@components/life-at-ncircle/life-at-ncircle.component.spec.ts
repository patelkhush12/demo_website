import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeAtNcircleComponent } from './life-at-ncircle.component';

describe('LifeAtNcircleComponent', () => {
  let component: LifeAtNcircleComponent;
  let fixture: ComponentFixture<LifeAtNcircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeAtNcircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeAtNcircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

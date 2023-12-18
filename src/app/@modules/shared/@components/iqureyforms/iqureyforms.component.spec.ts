import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IqureyformsComponent } from './iqureyforms.component';

describe('IqureyformsComponent', () => {
  let component: IqureyformsComponent;
  let fixture: ComponentFixture<IqureyformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IqureyformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IqureyformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

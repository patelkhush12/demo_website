import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyHandoutDetailComponent } from './technology-handout-detail.component';

describe('TechnologyHandoutDetailComponent', () => {
  let component: TechnologyHandoutDetailComponent;
  let fixture: ComponentFixture<TechnologyHandoutDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyHandoutDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyHandoutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCateegoriesAllComponent } from './sidebar-cateegories-all.component';

describe('SidebarCateegoriesAllComponent', () => {
  let component: SidebarCateegoriesAllComponent;
  let fixture: ComponentFixture<SidebarCateegoriesAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarCateegoriesAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCateegoriesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

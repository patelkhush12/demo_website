import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarRecentComponent } from './sidebar-recent.component';

describe('SidebarRecentComponent', () => {
  let component: SidebarRecentComponent;
  let fixture: ComponentFixture<SidebarRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarRecentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEventRecentComponent } from './sidebar-event-recent.component';

describe('SidebarEventRecentComponent', () => {
  let component: SidebarEventRecentComponent;
  let fixture: ComponentFixture<SidebarEventRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarEventRecentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarEventRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

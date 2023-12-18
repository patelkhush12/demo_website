/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageShareComponent } from './page-share.component';

describe('PageShareComponent', () => {
  let component: PageShareComponent;
  let fixture: ComponentFixture<PageShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

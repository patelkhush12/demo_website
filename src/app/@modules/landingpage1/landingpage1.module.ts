import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Landingpage1Component } from './landingpage1.component';
import { SharedModule } from '../shared/shared.module';
import { landingRoutingModule } from '../shared/@components/landing-page1/landing_page-routing.module';
import { landingpageRoutingModule } from './landingpage1-routing.module';


@NgModule({
  declarations: [
    Landingpage1Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    // landingRoutingModule,
    landingpageRoutingModule
  ]
})
export class Landingpage1Module { }

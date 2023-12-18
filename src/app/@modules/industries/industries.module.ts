import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustriesRoutingModule } from './industries-routing.module';
import { IndustriesComponent } from './industries.component';
import { SharedModule } from '../shared/shared.module';
import { IndustryDetailComponent } from './industry-detail/industry-detail.component';


@NgModule({
  declarations: [
    IndustriesComponent,
    IndustryDetailComponent
  ],
  imports: [
    CommonModule,
    IndustriesRoutingModule,
    SharedModule
  ]
})
export class IndustriesModule { }

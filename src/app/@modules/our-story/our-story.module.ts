import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurStoryRoutingModule } from './our-story-routing.module';
import { OurStoryComponent } from './our-story.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    OurStoryComponent
  ],
  imports: [
    CommonModule,
    OurStoryRoutingModule,
    SharedModule
  ]
})
export class OurStoryModule { }

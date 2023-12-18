import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Template1Component } from './@components/template1/template1.component';
import { LandingpageRoutingModule } from './landingpage-routing.module';
import { Template2Component } from './@components/template2/template2.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { Template3Component } from './@components/template3/template3.component';
import { Template4Component } from './@components/template4/template4.component';
import { Template5Component } from './@components/template5/template5.component';
import { Template6Component } from './@components/template6/template6.component';
import { Template7Component } from './@components/template7/template7.component';
import { Template8Component } from './@components/template8/template8.component';

// import { LandingpageService } from './@service/landingpage.service';


@NgModule({
  declarations: [
    Template1Component,
    Template2Component,
    Template3Component,
    Template4Component,
    Template5Component,
    Template6Component,
    Template7Component,
    Template8Component,
    // LandingpageService
  ],
  imports: [
    LandingpageRoutingModule,
    SwiperModule,
    CommonModule
  ]
})
export class LandingpageModule { }

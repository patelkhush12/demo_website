import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { BannerComponent } from './@components/banner/banner.component';
import { WhatWeDoComponent } from './@components/what-we-do/what-we-do.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeResolver } from './@resolvers/home.resolver';
import { DeepExpertiseComponent } from './@components/deep-expertise/deep-expertise.component';
import { ExperienceComponent } from './@components/experience/experience.component';
import { TestimonialsComponent } from './@components/testimonials/testimonials.component';
import { ClientsComponent } from './@components/clients/clients.component';
import { ContactUsComponent } from './@components/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FactsComponent } from './@components/facts/facts.component';
import { HomeCounterComponent } from './@components/home-counter/home-counter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { IsExternalLinkPipe } from './@pipes/is-external-link.pipe';
import { NgxSpinnerModule } from "ngx-spinner";

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    resolve: { apiData: HomeResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  }
];


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    WhatWeDoComponent,
    DeepExpertiseComponent,
    ExperienceComponent,
    TestimonialsComponent,
    ClientsComponent,
    ContactUsComponent,
    FactsComponent,
    HomeCounterComponent,
    IsExternalLinkPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    // RouterModule.forChild(routes),
    SwiperModule,
    NgxSpinnerModule,

  ]
})
export class HomeModule { }

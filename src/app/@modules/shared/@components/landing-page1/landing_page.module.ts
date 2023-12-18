import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPage1Component } from './landing-page1.component';
import { landingRoutingModule } from './landing_page-routing.module';
// import { ServicesRoutingModule } from './services-routing.module';
// import { ServicesComponent } from './services.component';
// import { SharedModule } from '../shared/shared.module';
// import { ServiceDetailComponent } from './@components/service-detail/service-detail.component';
// import { ContainerDetailComponent } from './@components/container-detail/container-detail.component';
// import { SubservicesDetailComponent } from './@components/subservices-detail/subservices-detail.component';


@NgModule({
  declarations: [
    LandingPage1Component
    // ServicesComponent,
    // ServiceDetailComponent,
    // ContainerDetailComponent,
    // SubservicesDetailComponent
  ],
  imports: [
    CommonModule,
    landingRoutingModule
    // ServicesRoutingModule,
    // SharedModule
  ]
})
export class landing_pageModule { }
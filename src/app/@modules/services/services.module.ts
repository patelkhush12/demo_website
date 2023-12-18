import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { SharedModule } from '../shared/shared.module';
import { ServiceDetailComponent } from './@components/service-detail/service-detail.component';
import { ContainerDetailComponent } from './@components/container-detail/container-detail.component';
import { SubservicesDetailComponent } from './@components/subservices-detail/subservices-detail.component';


@NgModule({
  declarations: [
    ServicesComponent,
    ServiceDetailComponent,
    ContainerDetailComponent,
    SubservicesDetailComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule
  ]
})
export class ServicesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductStoreRoutingModule } from './product-store-routing.module';
import { ProductStoreComponent } from './product-store.component';
import { SharedModule } from '../shared/shared.module';
import { SubProductListComponent } from './@components/sub-product-list/sub-product-list.component';
import { SubProductDetailComponent } from './@components/sub-product-detail/sub-product-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductStoreComponent,
    SubProductListComponent,
    SubProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductStoreRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ProductStoreModule { }

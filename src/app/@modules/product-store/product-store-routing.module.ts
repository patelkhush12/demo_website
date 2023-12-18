import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubProductListComponent } from './@components/sub-product-list/sub-product-list.component';
import { SubProductDetailComponent } from './@components/sub-product-detail/sub-product-detail.component';
import { ProductStoreResolver } from './@resolver/product-store.resolver';
import { SubProductListResolver } from './@resolver/sub-product-list.resolver';
import { ProductStoreComponent } from './product-store.component';
import { SubProductDetailResolver } from './@resolver/sub-product-detail.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductStoreComponent,
    resolve: { apiData: ProductStoreResolver }
  },
  {
    path: ':slug',
    component: SubProductListComponent,
    resolve: { apiData: SubProductListResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {
    path: ':slug/:subProductSlug',
    component: SubProductDetailComponent,
    resolve: { apiData: SubProductDetailResolver },
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductStoreRoutingModule { }

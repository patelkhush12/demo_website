import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceDetailComponent } from './@components/service-detail/service-detail.component';
import { ServiceDetailResolver } from './@resolvers/service-detail.resolver';
import { SubServiceDetailResolver } from './@resolvers/subservice-detail.resolve';
import { ServicesResolver } from './@resolvers/services.resolver';
import { ServicesComponent } from './services.component';
import { SubservicesDetailComponent } from './@components/subservices-detail/subservices-detail.component';
// import { ContainerDetailComponent } from './@components/container-detail/container-detail.component';
// import { ContainerResolver } from './@resolvers/contanier.resolver';
// import { ContainerDetailResolver } from './@resolvers/contanier-detail.resolver';
const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: ':slug', component: ServiceDetailComponent, resolve: { apiData: ServiceDetailResolver } },
  { path: ':slug/:slug', component: SubservicesDetailComponent, resolve: { apiData: SubServiceDetailResolver } }
  // { path: '', component: ServicesComponent,resolve:{apiData:ContainerResolver} },
  // { path: ':slug', component: ContainerDetailComponent,resolve: { apiData: ContainerDetailResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule {


}

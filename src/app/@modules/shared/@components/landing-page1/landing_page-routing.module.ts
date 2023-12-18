import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage1Component } from './landing-page1.component';
// import { SubServiceDetailResolver} from './@resolve/landing-page.resolve'
import { ServiceDetailResolver } from 'src/app/@modules/services/@resolvers/service-detail.resolver';
import { LandingpageResolver } from './@resolve/landingpage.resolver';

// import { ServiceDetailComponent } from './@components/service-detail/service-detail.component';
// import { ServiceDetailResolver } from './@resolvers/service-detail.resolver';
// import { SubServiceDetailResolver } from './@resolvers/subservice-detail.resolve';
// import { ServicesResolver } from './@resolvers/services.resolver';
// import { ServicesComponent } from './services.component';
// import { SubservicesDetailComponent } from './@components/subservices-detail/subservices-detail.component';

const routes: Routes = [
  
    { path: 'landingpage/:slug', component: LandingPage1Component, resolve: { LandingpageResolver }},
    // { path: ':slug', component: ServiceDetailComponent, resolve: { apiData: ServiceDetailResolver } },
    // { path: 'subservice/:slug',component:SubservicesDetailComponent, resolve: { apiData: SubServiceDetailResolver }}
    // { path: '', component: ServicesComponent,resolve:{apiData:ContainerResolver} },
    // { path: ':slug', component: ContainerDetailComponent,resolve: { apiData: ContainerDetailResolver}}
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class landingRoutingModule { }
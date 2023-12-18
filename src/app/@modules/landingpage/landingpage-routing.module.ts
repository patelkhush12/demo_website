import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Template1Component } from './@components/template1/template1.component';
import { Template2Component } from './@components/template2/template2.component';
import { Template3Component } from './@components/template3/template3.component';
import { Template4Component } from './@components/template4/template4.component';
import { Template5Component } from './@components/template5/template5.component';
import { Template6Component } from './@components/template6/template6.component';
// import { ContainerDetailComponent } from './@components/container-detail/container-detail.component';
// import { ContainerResolver } from './@resolvers/contanier.resolver';
// import { ContainerDetailResolver } from './@resolvers/contanier-detail.resolver';

const routes: Routes = [
    { path: 'template1', component: Template1Component },
    { path: 'template2', component: Template2Component },
    { path: 'template3', component: Template3Component },
    { path: 'template4', component: Template4Component },
    { path: 'template5', component: Template5Component },
    { path: 'template6', component: Template6Component },
    // { path: ':slug', component: Template1Component, resolve: { apiData: ServiceDetailResolver } },
    // { path: '', component: ServicesComponent,resolve:{apiData:ContainerResolver} },
    // { path: ':slug', component: ContainerDetailComponent,resolve: { apiData: ContainerDetailResolver}}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LandingpageRoutingModule { }

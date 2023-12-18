import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndustryDetailResolver } from './@resolvers/industry-detail.resolver';
import { IndustryListResolver } from './@resolvers/industry-list.resolver';
import { IndustriesComponent } from './industries.component';
import { IndustryDetailComponent } from './industry-detail/industry-detail.component';

const routes: Routes = [
  {
    path: '',
    component: IndustriesComponent,
    resolve: { apiData: IndustryListResolver }
  },
  {
    path: ':slug',
    component: IndustryDetailComponent,
    resolve: { apiData: IndustryDetailResolver }
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustriesRoutingModule { }

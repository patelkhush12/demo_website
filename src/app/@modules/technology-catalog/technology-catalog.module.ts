import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyCatalogComponent } from './technology-catalog.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TechnologyCatalogResolver } from './@resolver/technology-catalog.resolver';

const routes: Routes = [
  {
    path: '', component: TechnologyCatalogComponent,
    resolve: { apiData: TechnologyCatalogResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TechnologyCatalogComponent]
})
export class TechnologyCatalogModule { }

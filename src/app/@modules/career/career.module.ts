import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerComponent } from './career.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CareerResolver } from './@resolver/career.resolver';

const routes: Routes = [
  {
    path: '', component: CareerComponent,
    resolve: { careerData: CareerResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CareerComponent]
})
export class CareerModule { }

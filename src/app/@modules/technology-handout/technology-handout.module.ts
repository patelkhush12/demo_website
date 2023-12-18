import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyHandoutComponent } from './technology-handout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyHandoutResolver } from './@resolver/technology-handout.resolver';
import { TechnologyHandoutDetailComponent } from './technology-handout-detail/technology-handout-detail.component';
import { TechnologyHandoutDetailResolver } from './@resolver/technology-handout-detail.resolver';

const routes: Routes = [
  {
    path: '', component: TechnologyHandoutComponent,
    resolve: { apiData: TechnologyHandoutResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {
    path: ':slug',
    component: TechnologyHandoutDetailComponent,
    resolve: { apiData: TechnologyHandoutDetailResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TechnologyHandoutComponent, TechnologyHandoutDetailComponent]
})

export class TechnologyHandoutModule {
  blogDefaultImage = 'assets/img/photos/blog-bg.jpg'

 }

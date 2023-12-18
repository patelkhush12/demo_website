import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseStudiesComponent } from './case-studies.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CaseStudyResolver } from './@resolver/case-study.resolver';
import { CaseStudyDetailComponent } from './@components/case-study-detail/case-study-detail.component';
import { CaseStudyDetailResolver } from './@resolver/case-study-detail.resolver';

const routes: Routes = [
  {
    path: '', component: CaseStudiesComponent,
    resolve: { caseStudyData: CaseStudyResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {
    path: ':slug', component: CaseStudyDetailComponent,
    resolve: { apiData: CaseStudyDetailResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CaseStudiesComponent, CaseStudyDetailComponent]
})
export class CaseStudiesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaCoverageComponent } from './media-coverage.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MediaCoverageResolver } from './@resolver/media-coverage.resolver';
import { MediaCoverageDetailComponent } from './media-coverage-detail/media-coverage-detail.component';
import { MediaCoverageDetailResolver } from './@resolver/media-coverage-detail.resolver';


const routes: Routes = [
  {
    path: '', component: MediaCoverageComponent,
    resolve: { MediaCoverageData: MediaCoverageResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {
    path: ':slug', component: MediaCoverageDetailComponent,
    resolve: { apiData: MediaCoverageDetailResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MediaCoverageComponent, MediaCoverageDetailComponent]
})
export class MediaCoverageModule { }

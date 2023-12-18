import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebinarComponent } from './webinar.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { WebinarResolver } from './@resolver/webinar.resolver';
import { WebinarDetailComponent } from './webinar-detail/webinar-detail.component';
import { WebinarDetailResolver } from './@resolver/webinar-detail.resolver';
import { IsEventUpcomingPipe } from './@pipes/is-event-upcoming.pipe';
import { HasWebinarIframeLinkPipe } from './@pipes/has-webinar-iframe-link.pipe';

const routes: Routes = [
  {
    path: '', component: WebinarComponent,
    resolve: { webinarData: WebinarResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {
    path: ':slug',
    component: WebinarDetailComponent,
    resolve: { apiData: WebinarDetailResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  }

];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    WebinarComponent,
    WebinarDetailComponent,
    IsEventUpcomingPipe,
    HasWebinarIframeLinkPipe
  ],
})
export class WebinarModule { }

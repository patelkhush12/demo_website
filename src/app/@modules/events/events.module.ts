import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { EventsResolver } from './@resolver/events.resolver';
import { EventsDetailComponent } from './events-detail/events-detail.component';
import { EventsDetailResolver } from './@resolver/events-detail.resolver';
import { SidebarEventRecentComponent } from './@components/sidebar-event-recent/sidebar-event-recent.component';

const routes: Routes = [
  {
    path: '', component: EventsComponent,
    resolve: { eventData: EventsResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {
    path: ':slug', component: EventsDetailComponent,
    resolve: { apiData: EventsDetailResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },

];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    EventsComponent,
     EventsDetailComponent,
     SidebarEventRecentComponent,
    ]
})
export class EventsModule { }

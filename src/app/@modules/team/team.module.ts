import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { RouterModule, Routes } from '@angular/router';
import { TeamResolver } from './@resolver/team.resolver';
import { SharedModule } from '../shared/shared.module';
import { FilterByRolePipe } from './@pipe/filter-by-role.pipe';
import { SwiperModule } from 'ngx-swiper-wrapper';
const routes: Routes = [
  {
    path: '', component: TeamComponent,
    resolve: { teamData: TeamResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SwiperModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    TeamComponent,
    FilterByRolePipe
  ]
})
export class TeamModule { }

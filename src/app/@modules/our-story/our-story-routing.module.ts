import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurStoryResolver } from './@resolver/our-story.resolver';
import { OurStoryComponent } from './our-story.component';

const routes: Routes = [{ path: '', component: OurStoryComponent ,  resolve: { apiData: OurStoryResolver },
runGuardsAndResolvers: 'paramsOrQueryParamsChange'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurStoryRoutingModule { }

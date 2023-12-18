import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BlogResolver } from './@resolver/blog.resolver';
import { BlogDetailComponent } from './@components/blog-detail/blog-detail.component';
import { BlogDetailResolver } from './@resolver/blog-detail.resolver';

const routes: Routes = [
  {
    path: '', component: BlogComponent,
    resolve: { apiData: BlogResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {
    path: ':slug', component: BlogDetailComponent,
    resolve: { apiData: BlogDetailResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BlogComponent, BlogDetailComponent]
})
export class BlogModule { }

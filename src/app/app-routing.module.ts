import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './@components/not-found/not-found.component';
import { PrivacyPolicyComponent } from './@components/privacy-policy/privacy-policy.component';
import { WrapperComponent } from './@components/wrapper/wrapper.component';
import { HomeResolver } from './@modules/home/@resolvers/home.resolver';
import { HomeComponent } from './@modules/home/home.component';
import { WrapperResolver } from './@resolvers/wrapper.resolver';
import { BasePathService } from './@modules/shared/@services/base-path.service';

const basePath = 'LN/' + localStorage.getItem('language');

const routes: Routes = [
  // { path: '', loadChildren: () => import('./@modules/home/home.module').then(m => m.HomeModule) },
  {
    path: '', component: WrapperComponent,
    resolve: { apiData: WrapperResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    children: [
      {
        path: '', component: HomeComponent,
        resolve: { apiData: HomeResolver },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange'
      },

      // { path: ':basePath/services', loadChildren: () => import('./@modules/services/services.module').then(m => m.ServicesModule) },
      { path: ':basePath/privacy-cookie-policy', component: PrivacyPolicyComponent },
      { path: 'privacy-cookie-policy', component: PrivacyPolicyComponent },
      { path: ':basePath/services', loadChildren: () => import('./@modules/services/services.module').then(m => m.ServicesModule) },
      { path: 'services', loadChildren: () => import('./@modules/services/services.module').then(m => m.ServicesModule) },
      { path: ':basePath/products-store', loadChildren: () => import('./@modules/product-store/product-store.module').then(m => m.ProductStoreModule) },
      { path: 'products-store', loadChildren: () => import('./@modules/product-store/product-store.module').then(m => m.ProductStoreModule) },

      { path: ':basePath/industries', loadChildren: () => import('./@modules/industries/industries.module').then(m => m.IndustriesModule) },
      { path: 'industries', loadChildren: () => import('./@modules/industries/industries.module').then(m => m.IndustriesModule) },

      { path: ':basePath/blogs', loadChildren: () => import('./@modules/blog/blog.module').then(m => m.BlogModule) },
      { path: 'blogs', loadChildren: () => import('./@modules/blog/blog.module').then(m => m.BlogModule) },

      { path: ':basePath/case-studies', loadChildren: () => import('./@modules/case-studies/case-studies.module').then(m => m.CaseStudiesModule) },
      { path: 'case-studies', loadChildren: () => import('./@modules/case-studies/case-studies.module').then(m => m.CaseStudiesModule) },

      { path: ':basePath/technology-catalog', loadChildren: () => import('./@modules/technology-catalog/technology-catalog.module').then(m => m.TechnologyCatalogModule) },
      { path: 'technology-catalog', loadChildren: () => import('./@modules/technology-catalog/technology-catalog.module').then(m => m.TechnologyCatalogModule) },

      { path: ':basePath/technology-handouts', loadChildren: () => import('./@modules/technology-handout/technology-handout.module').then(m => m.TechnologyHandoutModule) },
      { path: 'technology-handouts', loadChildren: () => import('./@modules/technology-handout/technology-handout.module').then(m => m.TechnologyHandoutModule) },

      { path: ':basePath/media-coverage', loadChildren: () => import('./@modules/media-coverage/media-coverage.module').then(m => m.MediaCoverageModule) },
      { path: 'media-coverage', loadChildren: () => import('./@modules/media-coverage/media-coverage.module').then(m => m.MediaCoverageModule) },

      { path: ':basePath/events', loadChildren: () => import('./@modules/events/events.module').then(m => m.EventsModule) },
      { path: 'events', loadChildren: () => import('./@modules/events/events.module').then(m => m.EventsModule) },

      { path: ':basePath/webinar', loadChildren: () => import('./@modules/webinar/webinar.module').then(m => m.WebinarModule) },
      { path: 'webinar', loadChildren: () => import('./@modules/webinar/webinar.module').then(m => m.WebinarModule) },

      { path: ':basePath/clients', loadChildren: () => import('./@modules/clients/clients.module').then(m => m.ClientsModule) },
      { path: 'clients', loadChildren: () => import('./@modules/clients/clients.module').then(m => m.ClientsModule) },

      { path: ':basePath/sample-career', loadChildren: () => import('./@modules/career/career.module').then(m => m.CareerModule) },
      { path: 'team', loadChildren: () => import('./@modules/team/team.module').then(m => m.TeamModule) },

      { path: ':basePath/team', loadChildren: () => import('./@modules/team/team.module').then(m => m.TeamModule) },
      { path: ':basePath/our-story', loadChildren: () => import('./@modules/our-story/our-story.module').then(m => m.OurStoryModule) },
      { path: 'our-story', loadChildren: () => import('./@modules/our-story/our-story.module').then(m => m.OurStoryModule) },

      { path: ':basePath/contact-us', loadChildren: () => import('./@modules/contact-us/contact-us.module').then(m => m.ContactUsModule) },
      { path: 'contact-us', loadChildren: () => import('./@modules/contact-us/contact-us.module').then(m => m.ContactUsModule) },

      {
        path: ':basePath', component: HomeComponent,
        resolve: { apiData: HomeResolver },

      },
      // { path: ':basePath/landing-page', loadChildren: () => import('./@modules/shared/@components/landing-page1/landing_page.module').then(m => m.landing_pageModule) },
      { path: 'downloads', loadChildren: () => import('./@modules/landingpage1/landingpage1.module').then(m => m.Landingpage1Module) },


      { path: '404', component: NotFoundComponent },
      { path: '**', component: NotFoundComponent }
    ]
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

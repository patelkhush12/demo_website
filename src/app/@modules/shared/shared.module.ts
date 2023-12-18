import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './@components/header/header.component';
import { FooterComponent } from './@components/footer/footer.component';
import { NgsRevealModule } from 'ngx-scrollreveal';
// import { IvyCarouselModule } from 'angular-responsive-carousel';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafeHtmlPipe } from './@pipes/safeHtml.pipe';
import { TruncateHtmlPipe } from './@pipes/truncateHtml.pipe';
import { HeroSectionV1Component } from './@components/hero-section-v1/hero-section-v1.component';
import { SideBannerV1Component } from './@components/side-banner-v1/side-banner-v1.component';
import { PaginationComponent } from './@components/pagination/pagination.component';
import { SidebarSearchComponent } from './@components/sidebar-search/sidebar-search.component';
import { SidebarCategoriesComponent } from './@components/sidebar-categories/sidebar-categories.component';
import { SidebarRecentComponent } from './@components/sidebar-recent/sidebar-recent.component';
import { DetailCommentComponent } from './@components/detail-comment/detail-comment.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { BottomBarShareNCategoryComponent } from './@components/bottom-bar-share-n-category/bottom-bar-share-n-category.component';
import { LifeAtNcircleComponent } from './@components/life-at-ncircle/life-at-ncircle.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { ImageWithPageTitleComponent } from './@components/image-with-page-title/image-with-page-title.component';
import { DnTitleImageParaComponent } from './@dynamic_components/dn-title-image-para/dn-title-image-para.component';
import { DnTitleListComponent } from './@dynamic_components/dn-title-list/dn-title-list.component';
import { DnTitleChipsComponent } from './@dynamic_components/dn-title-chips/dn-title-chips.component';
import { PageShareComponent } from './@components/page-share/page-share.component';
import { CookieConsentComponent } from './@components/cookie-consent/cookie-consent.component';
import { AddressContentComponent } from 'src/app/@modules/shared/@components/address-content/address-content.component';
import { IqureyformsComponent } from './@components/iqureyforms/iqureyforms.component';
import { EnquiryformComponent } from './@components/enquiryform/enquiryform.component';
import { SidebarCateegoriesAllComponent } from './@components/sidebar-cateegories-all/sidebar-cateegories-all.component';
// import { LandingPage1Component } from './@components/landing-page1/landing-page1.component';
const ComponentsToExport = [
  // Components
  HeaderComponent,
  FooterComponent,
  HeroSectionV1Component,
  SideBannerV1Component,
  SidebarSearchComponent,
  SidebarCategoriesComponent,
  SidebarRecentComponent,
  DetailCommentComponent,
  LifeAtNcircleComponent,
  ImageWithPageTitleComponent,
  BottomBarShareNCategoryComponent,
  DnTitleImageParaComponent,
  CookieConsentComponent,
  AddressContentComponent,
  EnquiryformComponent,
  // Pipes
  SafeHtmlPipe,
  TruncateHtmlPipe,
  PaginationComponent,
  PageShareComponent,
  IqureyformsComponent,
  SidebarCateegoriesAllComponent
]

const ModulesToExport = [
  NgsRevealModule,
  // IvyCarouselModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  RecaptchaModule,
  RecaptchaFormsModule,
  SwiperModule
]
@NgModule({
  declarations: [
    ...ComponentsToExport,
    DnTitleImageParaComponent,
    DnTitleListComponent,
    DnTitleChipsComponent,
    IqureyformsComponent,
    EnquiryformComponent,
    SidebarCateegoriesAllComponent,
    // LandingPage1Component,
  ],
  imports: [
    CommonModule,
    ...ModulesToExport,
  ],
  exports: [
    ...ComponentsToExport,
    ...ModulesToExport,
  ]
})
export class SharedModule { }

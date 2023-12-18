import { Component, OnInit, Inject, PLATFORM_ID, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { LandingpageServiceApiResponse } from './@service/landingpage1.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { Landingpage1Service } from './@service/landingpage1.service';
import { LandingPage1ApiService } from '../shared/@components/landing-page1/@service/landing_page-api.service';
import { SeoService } from 'src/app/@modules/shared/@services/seo.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landingpage1',
  templateUrl: './landingpage1.component.html',
  styleUrls: ['./landingpage1.component.scss']
})
export class Landingpage1Component implements OnInit {
  landing_page_chips: any = [];
  // seo_keyword = ""
  // seo_title = ""
  // seo_description = ""
  apiData!: LandingPage1ApiService;
  constructor(private _activatedRoute: ActivatedRoute,
    private resolver: ComponentFactoryResolver,
    @Inject(PLATFORM_ID) private platformId: Object,
    private _title: Title,
    private _seoService: SeoService,
    public _service: Landingpage1Service) { }

  ngOnInit(): void {
    // alert("bjhdb")
  }
  abcd: any = [];
  chip: any = [];
  singleDetail$: Observable<any> = this._activatedRoute.data.pipe(
    map(data => {
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      this.abcd = data.apiData.landing_page_chips;
      const detail = data.apiData;
      // console.log(detail);
      // console.log(detail.seo_description);
      // console.log(detail.seo_keywords);
      // console.log(detail.seo_title);

      this._title.setTitle(`${detail.seo_title}`);
      this._seoService.updateMetaData(
        {
          title: detail.seo_title,
          description: detail.seo_description,
          // image: detail.list_image_1,
          keywords: detail.seo_keywords,
          image: ''
        }
      );
      // console.log();


      // this.chip= data.apiData.Service_landing_page_chips;

      console.log("bjcb", this.abcd);



      // this.componentWrapper.clear();
      // detail.Service_landing_page_chips.sort((a: any, b: any) => { return a.order - b.order }).forEach((cms: any) => {
      //   console.log("hello=",cms);

      //   const factory = this.resolver.resolveComponentFactory(DnComponentsMapping[cms.component.type]);
      //   this.componentRef = this.componentWrapper.createComponent(factory);
      //   this.componentRef.instance.data = cms.component.data;
      // });
      // console.log();

      return data.apiData

    }
    ))
}

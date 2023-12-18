import { Component, OnInit, Inject, PLATFORM_ID, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { SubServiceDetailResolver } from '../../@resolvers/subservice-detail.resolve';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SingleSubServiceApiResponse } from '../../@services/service-api.service';
import { map } from 'rxjs/operators';
import { ServiceApiResponse, ServiceApiService } from '../../@services/service-api.service';
import { DnComponentsMapping } from 'src/app/@modules/shared/@dynamic_method/dynamic-mapping';
import { isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { SeoService } from 'src/app/@modules/shared/@services/seo.service';


@Component({
  selector: 'app-subservices-detail',
  templateUrl: './subservices-detail.component.html',
  styleUrls: ['./subservices-detail.component.scss']
})
export class SubservicesDetailComponent implements OnInit {
  // singleDetailsub$: Observable<any>;
  Service_landing_page_chips: any = [];
  apiData!: SingleSubServiceApiResponse;
  @ViewChild('componentWrapper', { static: true, read: ViewContainerRef })
  componentWrapper!: ViewContainerRef;
  componentRef: any;
  detail: any = {};
  constructor(private _activatedRoute: ActivatedRoute,
    private resolver: ComponentFactoryResolver,
    private _seoService: SeoService,

    @Inject(PLATFORM_ID) private platformId: Object,
    private _title: Title,

    public _service: ServiceApiService) { }

  ngOnInit(): void {
    // this.getSingleDetail()
    // this.singleDetail$=this.Service_landing_page_chips 



  }
  abcd: any = [];
  chip: any = [];
  singleDetail$: Observable<any> = this._activatedRoute.data.pipe(
    map(data => {
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      this.abcd = data.apiData.Service_landing_page_chips;

      const detail = data.apiData;
      console.log(detail);

      this._title.setTitle(`${detail.seo_title}`);
      this._seoService.updateMetaData(
        {
          title: detail.seo_title,
          description: detail.seo_description,
          // image: detail.list_image_1,
          keywords: detail.seo_keyword,
          image: ''
        }
      );
      // this.chip= data.apiData.Service_landing_page_chips;

      // console.log("bjcb",this.abcd);



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
  // getSingleDetail() {
  //   this.singleDetail$=this.Service_landing_page_chips 
  // }
}

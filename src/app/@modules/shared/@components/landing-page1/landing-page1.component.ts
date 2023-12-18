import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LandingpageServiceApiResponse } from './@service/landing_page-api.service';
import { ServiceApiService } from 'src/app/@modules/services/@services/service-api.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-landing-page1',
  templateUrl: './landing-page1.component.html',
  styleUrls: ['./landing-page1.component.scss']
})
export class LandingPage1Component implements OnInit {
  // Service_landing_page_chips: any=[] ; 
  landing_page_chips: any = [];
  apiData!: LandingpageServiceApiResponse;
  // @ViewChild('componentWrapper', { static: true, read: ViewContainerRef })
  // componentWrapper!: ViewContainerRef;
  componentRef: any;
  detail: any = {};
  constructor(private _activatedRoute: ActivatedRoute,
    // private resolver: ComponentFactoryResolver,
    @Inject(PLATFORM_ID) private platformId: Object,
    public _service: ServiceApiService) { }

  ngOnInit(): void {
    // this.getSingleDetail()
    // this.singleDetail$=this.Service_landing_page_chips 
    // alert("bjbsb")


  }
  abcd: any = [];
  chip: any = [];
  singleDetail$: Observable<any> = this._activatedRoute.data.pipe(
    map(data => {
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      this.abcd = data.apiData.landing_page_chips;


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
}

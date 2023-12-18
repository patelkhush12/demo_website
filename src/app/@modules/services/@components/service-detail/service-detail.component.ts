import { isPlatformBrowser } from '@angular/common';
import { Component, ComponentFactoryResolver, Inject, OnInit, PLATFORM_ID, ViewChild, ViewContainerRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DnComponentsMapping } from 'src/app/@modules/shared/@dynamic_components/componsnts-mapping';
import { SeoService } from 'src/app/@modules/shared/@services/seo.service';
import { SingleServiceApiResponse } from '../../@services/service-api.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  @ViewChild('componentWrapper', { static: true, read: ViewContainerRef })
  componentWrapper!: ViewContainerRef;
  componentRef: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private resolver: ComponentFactoryResolver,
    private _title: Title,
    private _seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  ngOnInit(): void {
    // if (isPlatformBrowser(this.platformId)) {
    //   window.scrollTo({ top: 0, behavior: 'smooth' });
    // }
  }

  apiData!: SingleServiceApiResponse;

  // singleDetail$ = this._activatedRoute.data.pipe(
  //   map(data => {
  //     this.apiData = data.apiData as SingleServiceApiResponse;
  //     this._title.setTitle(`${this.apiData.title} | nCircle Tech`);
  //     this.apiData.service_component.sort((a, b) => { return a.order - b.order }).forEach(cms => {
  //       const factory = this.resolver.resolveComponentFactory(DnComponentsMapping[cms.component.type]);
  //       this.componentRef = this.componentWrapper.createComponent(factory);
  //       this.componentRef.instance.data = cms.component.data;
  //     });

  //     return data.apiData
  //   })
  // );

  singleDetail$: Observable<any> = this._activatedRoute.data.pipe(
    map(data => {
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      const detail = data.apiData;
      this._title.setTitle(`${detail.seo_title}`);
      this._seoService.updateMetaData(
        {
          title: detail.title,
          description: detail.list_description,
          // image: detail.list_image_1,
          keywords: detail.seo_keywords,
          image: ''
        }
      );
      this.componentWrapper.clear();
      // console.log("details",detail)
      detail.service_component.sort((a: any, b: any) => { return a.order - b.order }).forEach((cms: any) => {
        // console.log("helloDS",cms)
        const factory = this.resolver.resolveComponentFactory(DnComponentsMapping[cms.component.type]);
        this.componentRef = this.componentWrapper.createComponent(factory);
        this.componentRef.instance.data = cms.component.data;
      });
      return data.apiData
    }),
  );


}

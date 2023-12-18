import { isPlatformBrowser } from '@angular/common';
import { Component, ComponentFactoryResolver, Inject, OnInit, PLATFORM_ID, ViewChild, ViewContainerRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DnComponentsMapping } from 'src/app/@modules/shared/@dynamic_components/componsnts-mapping';
import { SeoService } from 'src/app/@modules/shared/@services/seo.service';
import { SingleContainerApiResponse } from '../../@services/contanier-api.service';

@Component({
  selector: 'app-container-detail',
  templateUrl: './container-detail.component.html',
  styleUrls: ['./container-detail.component.scss']
})
export class ContainerDetailComponent implements OnInit {
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
  }
  apiData!: SingleContainerApiResponse;

  singlecontainerDetail$: Observable<any> = this._activatedRoute.data.pipe(
    map(data => {
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      const detail = data.apiData;
      this._title.setTitle(`${detail.title} | nCircle Tech`);
      this._seoService.updateMetaData(
        {
          title: detail.title,
          description: detail.list_description,
          // image: detail.icon,
          keywords: detail.keyword,
          image: ''

        }
      );
      this.componentWrapper.clear();
      detail.service_component.sort((a: any, b: any) => { return a.order - b.order }).forEach((cms: any) => {
        const factory = this.resolver.resolveComponentFactory(DnComponentsMapping[cms.component.type]);
        this.componentRef = this.componentWrapper.createComponent(factory);
        this.componentRef.instance.data = cms.component.data;
      });
      return data.apiData
    }),
  );

}

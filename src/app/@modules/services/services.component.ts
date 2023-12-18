import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SeoService } from '../shared/@services/seo.service';
import { ServiceApiResponse, ServiceApiService } from './@services/service-api.service';
import { ContainerApiResponse } from './@services/contanier-api.service';
import { ContainerApiContainer } from './@services/contanier-api.service'
import { response } from 'express';
import * as sidebarlabel from '../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../assets/i18n/jp.json';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, AfterViewInit {
  seo_keyword = ""
  seo_title = ""
  seo_description = ""
  msglabel: any;
  localstoragelanguage: any;

  seo_title_container = ""
  seo_keyword_container = ""
  seo_description_container = ""
  bannerData: any;
  seodata: any;
  services: { icon: string; }[] = [
    { icon: 'path/to/icon1.png' },
    { icon: 'path/to/icon2.png' },
    { icon: 'path/to/icon3.png' }
  ];
  service !: { content: string; }[]
  ContanierList: any = []
  serviceList: any = []
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object,
    public data: ContainerApiContainer,
    private _title: Title,
    public meta: Meta,
    public _service: ServiceApiService,

  ) {
    this.intial()
    // console.log("BIM and CAD Workflow Automation")


  }

  ngAfterViewInit() {

  }

  ngOnInit(): void {
    this.getBannerData();
    // console.log(document.getElementById('as kk0')?.scrollIntoView())
    // console.log(document.getElementById('sec1'))
    document.getElementById('sec1')?.scrollIntoView();

    this.getdata();
    // this.getseodata();
    // console.log(this._seoService.title1)

    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    this.localstoragelanguage = localStorage.getItem('language');
    // const abc = localStorage.getItem('language');
    // console.log(this.localstoragelanguage
    // );

    if (this.localstoragelanguage == "EN") {
      // console.log(this.msglabel);

      this.msglabel = sidebarlabel

    } else if (this.localstoragelanguage == "IN") {

      this.msglabel = sidebarlabel
    }
    else {
      this.msglabel = sidebarlabel1
    }
    if (this.localstoragelanguage == "EN") {
      this._seoService.setTitle("Best CAD BIM Services | Workflow Automation | nCircle Tech");
      this._seoService.updateMetaData({
        title: 'Best CAD BIM Services | Workflow Automation | nCircle Tech',
        description: 'nCircle Tech offers CAD & BIM software customization & development, BIM workflow automation, and Machine Learning in CAD & BIM',
        image: `${environment.baseSiteUrl}/assets/img/sq-logo.png`,
        keywords: ''
      })
    } else if (this.localstoragelanguage == "IN") {
      this._seoService.setTitle("Best CAD BIM Services | Workflow Automation | nCircle Tech");
      this._seoService.updateMetaData({
        title: 'Best CAD BIM Services | Workflow Automation | nCircle Tech',
        description: 'nCircle Tech offers CAD & BIM software customization & development, BIM workflow automation, and Machine Learning in CAD & BIM',
        image: `${environment.baseSiteUrl}/assets/img/sq-logo.png`,
        keywords: ''
      })
    }
    else {
      this._seoService.setTitle("ベストなCAD BIMサービス | ワークフローの自動化 | nCircle Tech");
      this._seoService.updateMetaData({
        title: 'ベストなCAD BIMサービス | ワークフローの自動化 | nCircle Tech',
        description: 'nCircle Techでは、CADおよびBIMソフトウェアのカスタマイズと開発、BIMワークフローの自動化、そしてCADおよびBIMにおける機械学習を提供しています。',
        image: `${environment.baseSiteUrl}/assets/img/sq-logo.png`,
        keywords: ''
      })

    }
  }

  // container= [
  //   { title: 'BIM & CAD Workflow Automation' },
  //   { title: 'CAD & BIM Plug-ins' },
  // ]
  // weOffer = [
  //   { title: "Dedicated development teams to augment your capacity", image: 'assets/img/icons/services/team.svg' },
  //   { title: "End to end Product development on desktop/mobile/cloud", image: 'assets/img/icons/services/cloud.svg' },
  //   { title: "Innovative approach using Machine learning and AI", image: 'assets/img/icons/services/innovative.svg' },
  //   { title: "BIM Modeling and ScantoBIM using BIM Automation", image: 'assets/img/icons/services/bimcad.svg' },
  // ]

  // getdata(){
  //   this.data.getAllContainerService().subscribe({
  //     next: (res) => {
  //       this.ContanierList = res.results

  //     },
  //     error: () => {

  //       // alert('Error Happen')
  //     }
  //   })
  // }
  getdata() {
    this._service.getAllService({}).subscribe({
      next: (res) => {
        // console.log(res)
        this.serviceList = res.results
        // console.log(this.serviceList)
        // const detail = data1.apiData.results;
        // console.log(data.apiData.results)
        // this._title.setTitle(`${detail.title} | nCircle Tech`);
        for (let i = 0; i < this.serviceList.length; i++) {

          if (this.seo_keyword.length == 0) {
            this.seo_keyword = this.seo_keyword + this.serviceList[i].seo_keywords

          } else {
            this.seo_keyword = this.seo_keyword + "," + this.serviceList[i].seo_keywords
          }
          if (this.seo_title.length == 0) {
            this.seo_title = this.seo_title + this.serviceList[i].seo_title

          } else {
            this.seo_title = this.seo_title + "," + this.serviceList[i].seo_title
          }

          if (this.seo_description.length == 0) {
            this.seo_description = this.seo_description + this.serviceList[i].seo_description

          } else {
            this.seo_description = this.seo_description + "," + this.serviceList[i].seo_description

          }


        }

        this._seoService.updateMetaData(
          {
            title: this.seo_title,
            description: this.seo_description,
            keywords: this.seo_keyword,
            image: `${environment.baseSiteUrl}/assets/img/sq-logo.png`,

          })
      },
      error: () => {

        // alert('Error Happen')
      }
    })
  }


  servicesList$: Observable<ServiceApiResponse> = this._activatedRoute.data.pipe(
    map(data => {
      // console.log(data)
      // const detail = data.apiData.results;
      // // console.log(data.apiData.results)
      // // this._title.setTitle(`${detail.title} | nCircle Tech`);
      // for (let i = 0; i < detail.length; i++) {

      //   if (this.seo_keyword.length == 0) {
      //     this.seo_keyword = this.seo_keyword + detail[i].seo_keywords

      //   } else {
      //     this.seo_keyword = this.seo_keyword + "," + detail[i].seo_keywords
      //   }
      //   if (this.seo_title.length == 0) {
      //     this.seo_title = this.seo_title + detail[i].seo_title

      //   } else {
      //     this.seo_title = this.seo_title + "," + detail[i].seo_title
      //   }

      //   if (this.seo_description.length == 0) {
      //     this.seo_description = this.seo_description + detail[i].seo_description

      //   } else {
      //     this.seo_description = this.seo_description + "," + detail[i].seo_description

      //   }


      // }

      // this._seoService.updateMetaData(
      //   {
      //     title: this.seo_title,
      //     description: this.seo_description,
      //     keywords: this.seo_keyword
      //   }
      // );
      return data.apiData
    }
    )
  )
  ContanierList$: Observable<ContainerApiResponse> = this._activatedRoute.data.pipe(
    map(data => {


      // const detail = data.ContanierList.results;

      // this._title.setTitle(`${detail.title} | nCircle Tech`);
      // for (let i = 0; i < detail.length; i++) {


      //   if (this.seo_keyword.length == 0) {
      //     this.seo_keyword = this.seo_keyword + detail[i].seo_keywords

      //   } else {
      //     this.seo_keyword = this.seo_keyword + "," + detail[i].seo_keywords
      //   }
      //   if (this.seo_title.length == 0) {
      //     this.seo_title = this.seo_title + detail[i].seo_title

      //   } else {
      //     this.seo_title = this.seo_title + "," + detail[i].seo_title
      //   }

      //   if (this.seo_description.length == 0) {
      //     this.seo_description = this.seo_description + detail[i].seo_description

      //   } else {
      //     this.seo_description = this.seo_description + "," + detail[i].seo_description

      //   }


      // }

      // this._seoService.updateMetaData(
      //   {
      //     title: this.seo_title,
      //     description: this.seo_description,
      //     keywords:this.seo_keyword 
      //   }
      // );
      return data.ContanierList
    }
    ))
  intial() {
    this.data.getAllcontainer().subscribe({
      next: (res) => {

        this.ContanierList = res

        // for (let i = 0; i < this.ContanierList.results.length; i++) {

        //   if (this.seo_keyword_container.length == 0) {

        //     this.seo_keyword_container = this.seo_keyword_container + this.ContanierList.results[i].seo_keywords

        //   } else {


        //     this.seo_keyword_container = this.seo_keyword_container + "," + this.ContanierList.results[i].seo_keywords
        //   }
        //   if (this.seo_title_container.length == 0) {
        //     this.seo_title_container = this.seo_title_container + this.ContanierList.results[i].seo_title

        //   } else {
        //     this.seo_title_container = this.seo_title_container + "," + this.ContanierList.results[i].seo_title
        //   }

        //   if (this.seo_description_container.length == 0) {
        //     this.seo_description_container = this.seo_description_container + this.ContanierList.results[i].seo_description

        //   } else {
        //     this.seo_description_container = this.seo_description_container + "," + this.ContanierList.results[i].seo_description

        //   }
        // }


        // this._seoService.addMetaData(
        //   {
        //     title: this.seo_title_container,
        //     description: this.seo_description_container,
        //     keywords: this.seo_keyword_container
        //   })

        // this._seoService.updateMetaData(
        // {
        //   title: this.ContanierList.results[],
        //   description: this.seo_description,
        //   keywords:this.seo_keyword
        // })


      },
      error: () => {

        // alert('Error Happen')
      }
    })
  }

  getBannerData() {
    this._service.getBannerData().subscribe(response => {
      this.bannerData = response;
    });
  }
  getseodata() {
    this._service.getseodata().subscribe(response => {
      this.seodata = response
      const detail = this.seodata
      this._title.setTitle(`${detail.seo_title}`);
      console.log(detail.seo_title);

      this._seoService.updateMetaData(
        {
          title: detail.seo_title,
          description: detail.seo_description,
          keywords: detail.seo_keywords,
          image: `${environment.baseSiteUrl}/assets/img/sq-logo.png`,

        }
      );
    })
  }
}

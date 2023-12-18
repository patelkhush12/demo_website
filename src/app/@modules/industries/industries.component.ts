import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { SeoService } from '../shared/@services/seo.service';
import * as sidebarlabel from '../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../assets/i18n/jp.json';
import * as message1 from './../../../assets/i18n/language.json'
// import * as sidebarlabel2 from '../../../assets/i18n/language.json';





// import { isPlatformBrowser } from '@angular/common';
// import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
// import { Title } from '@angular/platform-browser';
// import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { log } from 'console';
import { BlogService } from '../blog/@service/blog.service';
import { response } from 'express';
// import { map } from 'rxjs/operators';
// import { SeoService } from '../../shared/@services/seo.service';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {
  @ViewChild('para') para!: ElementRef;
  seodata: any;
  seo_keyword = ""
  seo_title = ""
  seo_description = ""
  bannerData: any;
  msglabel: any;
  localstoragelanguage: any;
  // imageAlignment: string = 'left';
  imageAlignment: string = 'i % 2 ==0';
  image: string = 'left';

  // imageAlignment: string = 'left';
  constructor(
    private activatedRoute: ActivatedRoute,
    private _seoService: SeoService,
    private _activatedRoute: ActivatedRoute,
    private _title: Title,
    public meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object,
    public _blogService: BlogService
  ) { }

  ngOnInit(): void {
    // console.log("bhxsh",this.imageAlignment);
    if (this.imageAlignment == this.image) {
      this.imageAlignment = "left"
    } else {
      this.imageAlignment = "right"

    }
    this.localstoragelanguage = localStorage.getItem('language');
    // const abc = localStorage.getItem('language');
    // console.log(message1)
    if (this.localstoragelanguage == "EN") {
      this.msglabel = sidebarlabel

    } else if (this.localstoragelanguage == "IN") {
      this.msglabel = sidebarlabel

    }
    else {
      this.msglabel = sidebarlabel1
    }
    // console.log(this.msglabel)
    // console.log(localStorage.getItem('language'));

    this.getBannerData();
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // this.getseodata()
    if (this.localstoragelanguage == "EN") {
      this._seoService.setTitle("AEC & Manufacturing Industries | nCircle Tech");
      this._seoService.updateMetaData({
        title: 'AEC & Manufacturing Industries | nCircle Tech',
        description: 'Empowering Excellence in AEC & Manufacturing Industries. Discover how our tailored solutions drive innovation and growth.',
        image: '/assets/img/page-title-images/industries.jpg',
        keywords: ''
      })
    } else if (this.localstoragelanguage == "IN") {
      this._seoService.setTitle("AEC & Manufacturing Industries | nCircle Tech");
      this._seoService.updateMetaData({
        title: 'AEC & Manufacturing Industries | nCircle Tech',
        description: 'Empowering Excellence in AEC & Manufacturing Industries. Discover how our tailored solutions drive innovation and growth.',
        image: '/assets/img/page-title-images/industries.jpg',
        keywords: ''
      })
    }
    else {
      this._seoService.setTitle("AEC（建設・建築・エンジニアリング）および製造業界 | nCircle Tech");
      this._seoService.updateMetaData({
        title: 'AEC（建設・建築・エンジニアリング）および製造業界 | nCircle Tech',
        description: 'AECおよび製造業界の卓越性を支える。当社の特別なソリューションがイノベーションと成長を促進する方法を発見してください',
        image: '/assets/img/page-title-images/industries.jpg',
        keywords: ''
      })
    }
  }
  ngAfterViewInit(): void {
    for (let i = 0; i < this.para.nativeElement.getElementsByTagName('a').length; i++) {
      this.para.nativeElement.getElementsByTagName('a')[i].style.color = "blue"
    }
  }

  // apiData$ = this.activatedRoute.data.pipe(
  //   map(data => data.apiData)

  // )


  apiData$: Observable<any> = this._activatedRoute.data.pipe(
    map(data => {

      // const detail = data.apiData.results;

      // this._title.setTitle(`Industries | nCircle Tech`);
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
    }),
  );

  getBannerData() {
    this._blogService.getBannerDataIndustry().subscribe(response => {
      this.bannerData = response;
    });
  }
  getseodata() {
    this._blogService.getseodata().subscribe(response => {
      console.log(response);

      this.seodata = response;
      const detail = this.seodata
      this._title.setTitle(`${detail.seo_title}`);
      // console.log(detail.seo_title);

      this._seoService.updateMetaData(
        {
          title: detail.seo_title,
          description: detail.seo_description,
          keywords: detail.seo_keywords,
          image: '/assets/img/page-title-images/industries.jpg',

        }
      );


    })
  }
}

import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SeoService } from '../shared/@services/seo.service';
import { TechnologyHandoutService } from './@service/technology-handout.service';
import { response } from 'express';
import * as sidebarlabel from '../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../assets/i18n/jp.json';

@Component({
  selector: 'app-technology-handout',
  templateUrl: './technology-handout.component.html',
  styleUrls: ['./technology-handout.component.scss']
})
export class TechnologyHandoutComponent implements OnInit {
  seo_keyword = ""
  seo_title = ""
  seo_description = ""
  bannerData: any;
  seodata: any;
  localstoragelanguage: any;
  msglabel: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _technologyHandoutService: TechnologyHandoutService,
    private _seoService: SeoService,
    private _title: Title,
    public meta: Meta,

    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }


  ngOnInit() {
    this.getBannerData();
    // this.getseodata();
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
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
      this._seoService.setTitle("Technology Handouts | nCircle Tech");
      this._seoService.updateMetaData({
        title: 'Technology Handouts | nCircle Tech',
        description: 'Turn your business idea into reality. Check out our latest flyers and view our range of various services.',
        image: '',
        keywords: ''
      })
    } else if (this.localstoragelanguage == "IN") {
      this._seoService.setTitle("Technology Handouts | nCircle Tech");
      this._seoService.updateMetaData({
        title: 'Technology Handouts | nCircle Tech',
        description: 'Turn your business idea into reality. Check out our latest flyers and view our range of various services.',
        image: '',
        keywords: ''
      })
    }
    else {
      this._seoService.setTitle("テクノロジー資料 | nCircle Tech");
      this._seoService.updateMetaData({
        title: 'テクノロジー資料 | nCircle Tech',
        description: 'ビジネスのアイデアを現実に変えましょう。当社の最新のフライヤーをチェックし、様々なサービスの範囲をご覧ください',
        image: '',
        keywords: ''
      })
    }
  }

  techHandoutListData: any;

  apiData$: Observable<any> = this._activatedRoute.data.pipe(
    map(data => {
      this.techHandoutListData = data.apiData.list;
      this.page_size = data.apiData.page_size;

      // const detail = this.techHandoutListData.results;

      // this._title.setTitle(`Technology-Handouts | nCircle Tech`);
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

  page = 1;
  page_size = 4;
  search = '';

  onPageChange(pageEvent: any) {
    if (pageEvent != this.page) {
      this.page = pageEvent;
      this._technologyHandoutService.getAllTechnologyHandout({ page: this.page, page_size: this.page_size }).subscribe(next => {
        this.techHandoutListData = next;
        window.scroll({ top: 0, behavior: 'smooth' });
      });
    }
  }

  onSearchChange(search: any) {
    if (search != this.search) {
      this.search = search;
      this._technologyHandoutService.getAllTechnologyHandout({ page: this.page, page_size: this.page_size, search: search }).subscribe(next => {
        this.techHandoutListData = next;
      })
    }
  }

  getBannerData() {
    this._technologyHandoutService.getBannerData().subscribe(response => {
      this.bannerData = response;
    });
  }
  getseodata() {
    this._technologyHandoutService.getseodata().subscribe(response => {
      this.seodata = response
      const detail = this.seodata
      this._title.setTitle(`${detail.seo_title}`);
      console.log(detail.seo_title);

      this._seoService.updateMetaData(
        {
          title: detail.seo_title,
          description: detail.seo_description,
          keywords: detail.seo_keywords,
          image: '',

        }
      );

    })
  }
  getBlogLink(slug: string): any {
    var language = localStorage.getItem('language');

    // Check if the language is 'IN', if so, set it to 'EN' or another default language
    // if (language === 'IN') {
    //   language = ''; // Change it to your default language code
    //   // console.log(language);

    // }

    // console.log(slug)
    if (language == 'IN') {
      const url = `technology-handouts/${slug}`;
      // console.log(url);

      window.open(url, '_blank');
    } else {
      const url = `/${language}/technology-handouts/${slug}`;
      console.log(url);

      window.open(url, '_blank');

    }
    // Construct the URL based on the language and slug
    // return `/${language}/blogs/${slug}`;
    // this.router.navigate([`/${language}/blogs/${slug}`])


    // console.log(/${language}/blogs / ${ slug })
  }
}

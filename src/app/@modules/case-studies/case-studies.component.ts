import { Component, Inject, OnInit, PLATFORM_ID, Input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CaseStudyService } from './@service/case-study.service';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../shared/@services/seo.service';
import { environment } from 'src/environments/environment';
import { BlogService } from '../blog/@service/blog.service';
import * as sidebarlabel from '../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../assets/i18n/jp.json';


@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent implements OnInit {
  resourceUrl: any
  seo_keyword = ""
  seo_title = ""
  seo_description = ""
  bannerData: any;
  seodata: any;
  localstoragelanguage: any;
  msglabel: any;

  abcd: any = "asdfgasdfg";

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _caseStudyService: CaseStudyService,
    private _seoService: SeoService,
    private _title: Title,
    public meta: Meta,
    private _blogService: BlogService,

    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  ngOnInit() {
    this.getBannerData();
    // this.getseodata();
    if (isPlatformBrowser(this.platformId)) {
      window.scroll({ top: 0, behavior: 'smooth' });
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
      this._seoService.setTitle("Exploring Success Stories - Dive into Our Case Studies");
      this._seoService.updateMetaData({
        title: 'Exploring Success Stories - Dive into Our Case Studies',
        description: 'Unlock the secrets of success through our case studies. Journey through real examples that showcase how our solutions have overcome challenges.',
        image: '/assets/img/page-title-images/case-study.jpg',
        keywords: ''
      })
    } else if (this.localstoragelanguage == "IN") {
      this._seoService.setTitle("Exploring Success Stories - Dive into Our Case Studies");
      this._seoService.updateMetaData({
        title: 'Exploring Success Stories - Dive into Our Case Studies',
        description: 'Unlock the secrets of success through our case studies. Journey through real examples that showcase how our solutions have overcome challenges.',
        image: '/assets/img/page-title-images/case-study.jpg',
        keywords: ''
      })
    }
    else {
      this._seoService.setTitle("成功事例の探求 - 弊社のケーススタディに深入りしてみてください");
      this._seoService.updateMetaData({
        title: '成功事例の探求 - 弊社のケーススタディに深入りしてみてください',
        description: '弊社のケーススタディを通じて成功の秘訣を解き放ちましょう。弊社のソリューションがどのように課題を乗り越えたかを示す実際の例を見ていただきます',
        image: '/assets/img/page-title-images/case-study.jpg',
        keywords: ''
      })
    }
  }

  navTextModeIsWhite = false;
  navColorClass !: string | null;
  navBgClass: string | null = "c-white";

  page = 1;
  page_size = 3;
  search = '';

  onPageChange(pageEvent: any) {
    if (pageEvent != this.page) {
      this.page = pageEvent;
      this._caseStudyService.getAllCaseStudy({ page: this.page, page_size: this.page_size }).subscribe(next => {
        this.caseStudyListData = next;
        window.scroll({ top: 0, behavior: 'smooth' });
      });
    }
  }

  caseStudyListData: any;

  apiData$: Observable<any> = this._activatedRoute.data.pipe(
    map(data => {
      this.caseStudyListData = data.caseStudyData.list;
      this.page_size = data.caseStudyData.page_size;

      // const detail = this.caseStudyListData.results;

      // this._title.setTitle(`An Insight into our Work | nCircle Tech`);
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

      return data.caseStudyData
    }),
  );
  blogDefaultImage = 'assets/img/photos/blog-bg.jpg'

  getBannerData() {
    this._caseStudyService.getBannerDataCaseStudy().subscribe(response => {
      this.bannerData = response;

    });
  }

  getseodata() {
    this._caseStudyService.getseodata().subscribe(response => {
      this.seodata = response
      const detail = this.seodata
      this._title.setTitle(`${detail.seo_title}`);
      console.log(detail.seo_title);

      this._seoService.updateMetaData(
        {
          title: detail.seo_title,
          description: detail.seo_description,
          keywords: detail.seo_keywords,
          image: '/assets/img/page-title-images/case-study.jpg',

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
      const url = `case-studies/${slug}`;
      // console.log(url);

      window.open(url, '_blank');
    } else {
      const url = `/${language}/case-studies/${slug}`;
      console.log(url);

      window.open(url, '_blank');

    }
    // Construct the URL based on the language and slug
    // return `/${language}/blogs/${slug}`;
    // this.router.navigate([`/${language}/blogs/${slug}`])


    // console.log(/${language}/blogs / ${ slug })
  }
}

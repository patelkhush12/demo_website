import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { BlogService } from './@service/blog.service';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../shared/@services/seo.service';
import { environment } from 'src/environments/environment';
import * as sidebarlabel from '../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../assets/i18n/jp.json';
import { Router } from '@angular/router';

// import { Location } from '@angular/common';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  seo_keyword = ""
  seo_title = ""
  seo_description = ""
  seodata: any
  bannerData: any;
  localstoragelanguage: any;
  msglabel: any;
  private defaultImage: string = 'your-default-image-url-here';
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _blogService: BlogService,
    private _seoService: SeoService,
    private _title: Title,
    public meta: Meta,
    public router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    // public location: Location

  ) { }



  ngOnInit() {
    if (localStorage.getItem('language') == 'IN') {
      console.log("this is language");

      this.localstoragelanguage = '';
    } else {
      this.localstoragelanguage = localStorage.getItem('language');
      console.log("this is language");

    }
    if (isPlatformBrowser(this.platformId)) {
      window.scroll({ top: 0, behavior: 'smooth' });
    }
    this.getBannerData();
    // this.getseodata();
    this.localstoragelanguage = localStorage.getItem('language');
    // const abc = localStorage.getItem('language');
    // console.log(this.localstoragelanguage
    // );

    if (this.localstoragelanguage == "EN") {
      // console.log(this.msglabel);

      this.msglabel = sidebarlabel

    } else if (this.localstoragelanguage == "IN") {
      this.msglabel = sidebarlabel

    } else {
      this.msglabel = sidebarlabel1
    }
    if (this.localstoragelanguage == "EN") {
      this._seoService.setTitle("Blogs | nCircle Tech");
      this._seoService.updateMetaData({
        title: 'Blogs | nCircle Tech',
        description: 'nCircle Tech blogs are the best source of getting good hold of understanding in machine learning services, 3D engineering and CAD & BIM software.',
        image: `${environment.baseSiteUrl}/assets/img/page-title-images/blog.jpg`,
        keywords: ''

      })
      console.log('Updated metadata with default image:', `${environment.baseSiteUrl}/assets/img/page-title-images/blog.jpg`);
    } else if (this.localstoragelanguage == "IN") {
      this._seoService.setTitle("Blogs | nCircle Tech");
      this._seoService.updateMetaData({
        title: 'Blogs | nCircle Tech',
        description: 'nCircle Tech blogs are the best source of getting good hold of understanding in machine learning services, 3D engineering and CAD & BIM software.',
        image: `${environment.baseSiteUrl}/assets/img/page-title-images/blog.jpg`,
        keywords: ''

      })
    }
    else {
      this._seoService.setTitle("ブログ | nCircle Tech");
      this._seoService.updateMetaData({
        title: 'ブログ | nCircle Tech',
        description: 'nCircle Techのブログは、機械学習サービス、3Dエンジニアリング、およびCAD＆BIMソフトウェアに理解を深めるための最良の情報源です。',
        image: `${environment.baseSiteUrl}/assets/img/page-title-images/blog.jpg`,
        keywords: ''

      })
    }
  }

  blogListData: any;

  apiData$: Observable<any> = this._activatedRoute.data.pipe(
    map(data => {
      this.blogListData = data.apiData.list;

      this.page_size = data.apiData.page_size;

      // const detail = data.apiData.recent;
      // console.log(detail)
      // this._title.setTitle(`Blogs | nCircle Tech`);
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
      // this.location.replaceState('/blogs/list/'+data.title+'/basic');

    }),
  );


  page = 1;
  page_size = 6;
  search = '';

  onPageChange(pageEvent: any) {
    if (pageEvent != this.page) {
      this.page = pageEvent;
      this._blogService.getAllBlog({ page: this.page, page_size: this.page_size }).subscribe(next => {
        this.blogListData = next;
        window.scroll({ top: 0, behavior: 'smooth' });

      });
    }
  }

  onSearchChange(search: any) {
    if (search != this.search) {
      this.search = search;
      this._blogService.getAllBlog({ page: this.page, page_size: this.page_size, search: search }).subscribe(next => {
        this.blogListData = next;
      })
    }
  }

  getBannerData() {
    this._blogService.getBannerData().subscribe(response => {
      this.bannerData = response;

    });
  }
  getseodata() {
    this._blogService.getseodatablog().subscribe(response => {

      this.seodata = response;
      const detail = this.seodata
      this._title.setTitle(`${detail.seo_title}`);

      this._seoService.updateMetaData(
        {
          title: detail.seo_title,
          description: detail.seo_description,
          keywords: detail.seo_keywords,
          image: `${environment.baseSiteUrl}/assets/img/page-title-images/blog.jpg`
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
      const url = `blogs/${slug}`;
      // console.log(url);

      window.open(url, '_blank');
    } else {
      const url = `/${language}/blogs/${slug}`;
      console.log(url);

      window.open(url, '_blank');

    }
    // Construct the URL based on the language and slug
    // return `/${language}/blogs/${slug}`;
    // this.router.navigate([`/${language}/blogs/${slug}`])


    // console.log(/${language}/blogs / ${ slug })
  }

  blogDefaultImage = 'assets/img/photos/blog-bg.jpg'
}

import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SeoService } from 'src/app/@modules/shared/@services/seo.service';
import { SubProductService } from '../../@services/sub-product.service';
import { Meta, Title } from '@angular/platform-browser';
import * as sidebarlabel from '../../../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../../../assets/i18n/jp.json';

@Component({
  selector: 'app-sub-product-list.component',
  templateUrl: './sub-product-list.component.html',
  styleUrls: ['./sub-product-list.component.scss']
})
export class SubProductListComponent implements OnInit, AfterViewInit {
  @ViewChild('para') para!: ElementRef;
  localstoragelanguage: any;
  msglabel: any;
  seo_keyword = ""
  seo_title = ""
  seo_description = ""
  bannerData: any;
  slice_releasedate: any = [];
  currentSlug: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _title: Title,
    public meta: Meta,
    private _router: Router,
    private _subProductService: SubProductService,
    private _seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  ngOnInit(): void {
    // this.currentSlug = this._activatedRoute.snapshot.queryParams;
    // alert(this.currentSlug)
    // if (isPlatformBrowser(this.platformId)) {
    //   window.scrollTo({ top: 0, behavior: 'smooth' });
    // }
    this._seoService.setTitle("Development of CAD and BIM Plugins for AEC Industry | nCircle Tech");
    this._seoService.updateMetaData({
      title: 'Development of CAD and BIM Plugins for AEC Industry | nCircle Tech',
      description: 'nCircle Sub Products',
      image: 'assets/img/photos/blog-bg.jpg',
      keywords: ''
    })
    this.localstoragelanguage = localStorage.getItem('language');
    // const abc = localStorage.getItem('language');
    // console.log(this.localstoragelanguage
    // );

    console.log(this._subProductService.seo)

    if (this.localstoragelanguage == "EN") {
      // console.log(this.msglabel);

      this.msglabel = sidebarlabel

    } else if (this.localstoragelanguage == "IN") {
      this.msglabel = sidebarlabel

    }
    else {
      this.msglabel = sidebarlabel1
    }
  }
  ngAfterViewInit() {
    for (let i = 0; i < this.para.nativeElement.getElementsByTagName('a').length; i++) {
      this.para.nativeElement.getElementsByTagName('a')[i].style.color = "blue"
    }
  }

  param$ = this._activatedRoute.paramMap.pipe(
    map(paramMap => {
      this.slug = paramMap.get('slug') as string
      return paramMap.get('slug')
    })
  );

  slug = '';

  subProductListData: any;

  apiData$: Observable<any> = this._activatedRoute.data.pipe(
    map(data => {
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      this.subProductListData = data.apiData;
      // console.log(this.subProductListData);

      // for (let i = 0; i < this.subProductListData.results; i++) {
      this.slice_releasedate = this.subProductListData.list.results;
      // this.slice_releasedate = this.subProductListData.results.forEach((d: any, _: any) => {
      //   console.log(d);

      // })
      //   console.log(this.slice_releasedate);

      // }

      // this._title.setTitle(`Sub Product | nCircle Tech`);
      this._title.setTitle(this._subProductService.seo)
      for (let i = 0; i < this.subProductListData.length; i++) {


        if (this.seo_keyword.length == 0) {
          this.seo_keyword = this.seo_keyword + this.subProductListData[i].seo_keywords

        } else {
          this.seo_keyword = this.seo_keyword + "," + this.subProductListData[i].seo_keywords
        }
        if (this.seo_title.length == 0) {
          this.seo_title = this.seo_title + this.subProductListData[i].seo_title

        } else {
          this.seo_title = this.seo_title + "," + this.subProductListData[i].seo_title
        }

        if (this.seo_description.length == 0) {
          this.seo_description = this.seo_description + this.subProductListData[i].seo_description

        } else {
          this.seo_description = this.seo_description + "," + this.subProductListData[i].seo_description

        }


      }

      this._seoService.updateMetaData(
        {
          title: this.seo_title,
          description: this.seo_description,
          keywords: this.seo_keyword,
          image: 'assets/img/photos/blog-bg.jpg',

        }
      );


      this.page_size = data.apiData.page_size;
      return data.apiData
    }),
  );

  page = 1;
  page_size = 6;
  search = '';
  currentPage: number = 1;

  onPageChange(pageEvent: any) {
    if (pageEvent != this.page) {
      const currentPage = this.currentPage;

      const nextPage = pageEvent;

      localStorage.setItem('pageNumber', nextPage.toString())
      this._router.navigate([], {
        relativeTo: this._activatedRoute,
        queryParams: { page: nextPage },
        queryParamsHandling: 'merge',
        // console.log();

      });
      // console.log("yse");
      this.page = pageEvent;
      // alert(this.page)
      this._subProductService.getAllSubProducts(this.slug, { page: this.page, page_size: this.page_size }).subscribe(next => {
        this.subProductListData.list = next;
        // console.log("jnz", this.subProductListData.list.results);

        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  subProductDefaultImage = 'assets/img/photos/blog-bg.jpg'

  navigateToCategory(slug: any) {

    let currentQueryParams = this._activatedRoute.snapshot.queryParams;
    if (slug.length > 0) {
      currentQueryParams = {
        ...currentQueryParams,
        category: slug
      };
    } else {
      if (currentQueryParams.hasOwnProperty('category')) {
        let { category, ...noCategoryQueryParam } = currentQueryParams;
        currentQueryParams = noCategoryQueryParam;
      }
    }
    this._router.navigate(
      [`/products-store/${this.slug}`],
      {
        queryParams: currentQueryParams,
      });
  }


  abc: any
  // slug:any
  detailPage(subProductSlug: any) {
    this._subProductService.getAllSubProducts(this.slug, { page: this.page, page_size: this.page_size }).subscribe(next => {
      this.subProductListData.list;
      console.log(this.subProductListData);
    })

    for (var i = 0; i < this.subProductListData; i++) {
      this.abc = '/products-store' + '/' + this.slug + '/' + subProductSlug
      this._router.navigateByUrl(this.abc);
    }
  }


}
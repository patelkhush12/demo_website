import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TruncateHtmlPipe } from 'src/app/@modules/shared/@pipes/truncateHtml.pipe';
import { SeoService } from 'src/app/@modules/shared/@services/seo.service';
import * as sidebarlabel from '../../../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../../../assets/i18n/jp.json';
import { Location } from '@angular/common';
import { HostListener } from '@angular/core';
// import { PaginationService } from './pagination.service';

@Component({
  selector: 'app-sub-product-detail',
  templateUrl: './sub-product-detail.component.html',
  styleUrls: ['./sub-product-detail.component.scss'],
  providers: [TruncateHtmlPipe]
})
export class SubProductDetailComponent implements OnInit, AfterViewInit {
  localstoragelanguage: any;
  msglabel: any;
  @ViewChild('para') para!: ElementRef;
  subversionlist: any = [];
  sub_product_version: any = [];
  specificId: any
  selectedVersionId: any = []
  notSpecificVersion: any = []
  productvirson: any;
  hashversion: any
  currentPage: number = 1;
  PageNumber: any
  slugpage: any
  constructor(
    private _activatedRoute: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object,
    private _title: Title,
    private _seoService: SeoService,
    private _truncateHtmlPipe: TruncateHtmlPipe,
    private location: Location,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.PageNumber = localStorage.getItem('pageNumber')
    console.log(this.PageNumber);

    this.slugpage = localStorage.getItem('slug')
    window.addEventListener('popstate', () => {
      // Call the navigateBackToSubProductList function when the user navigates back
      this.navigateBackToSubProductList();
    });
    this.route.events.subscribe((e: any) => {
      if (e instanceof NavigationStart) {
        console.log('Navigation type: ', e);
      }
    })

    // this.location.back();
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

  }
  navigateBackToSubProductList() {
    // Retrieve the current page from the PaginationService
    const currentPage = this.currentPage;
    console.log(currentPage);
    const nextPage = currentPage + 1;
    // Navigate back to the sub-product list with the page query parameter
    this.route.navigate(['/sub-product-list'], { queryParams: { page: nextPage } });
  }
  navigateBackToSubProductList1() {
    // Retrieve the current page from the PaginationService
    console.log("jhahj");

    const currentPage = this.currentPage;
    console.log(currentPage);

    const nextPage = currentPage + 1;
    // alert(nextPage)
    // localStorage.getItem('pageNumber')
    // Navigate back to the sub-product list with the page query parameter

    // const para = localStorage.getItem('PageNumber')
    this.route.navigate(['/products-store/' + this.slugpage], { queryParams: { page: this.PageNumber } });
    // this.route.navigate(['/products-store/' + this.slugpage], { queryParams: { page: this.PageNumber } });
    // this.route.navigate(['/products-store/' + 'cad-bim-plugins'], { queryParams: { page: nextPage } });
  }
  ngAfterViewInit() {
    for (let i = 0; i < this.para.nativeElement.getElementsByTagName('a').length; i++) {
      this.para.nativeElement.getElementsByTagName('a')[i].style.color = "blue"
    }
  }

  subProductDefaultImage = 'assets/img/photos/blog-bg.jpg'

  // apiData$ = this._activatedRoute.data.pipe(
  //   map(data => data.apiData)
  // );

  apiData$: Observable<any> = this._activatedRoute.data.pipe(
    map(data => {
      const detail = data.apiData;
      // console.log("db", detail.has_version);
      this.hashversion = detail.has_version;
      // console.log(this.hashversion);
      console.log("xsbjh", detail);

      // console.log(detail);

      this._title.setTitle(`${detail.seo_title}`);
      this.subversionlist = detail.sub_product_version
      // this.selectedVersionId=detail.sub_product_version
      this.productvirson = this.subversionlist[0]
      // console.log("hhB", this.subversionlist);
      // console.log("sbjhb",this.selectedVersionId);


      this._seoService.updateMetaData(
        {
          title: detail.title,
          // item.description | truncateHtml:[10]
          description: this._truncateHtmlPipe.transform(detail.description, [255]),
          // image: detail.logo,
          keywords: '',
          image: ''
        }
      );
      return data.apiData
    }),
  );
  subproduct(event: any) {
    this.subversionlist.forEach((d: any, _: any) => {
      if (d.id == event.target.value) {
        // console.log(d)
        this.productvirson = d
      }
      // console.log(event.target.value);
    })

  }
}

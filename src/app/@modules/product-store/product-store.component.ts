import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SeoService } from '../shared/@services/seo.service';
import { SubProductService } from './@services/sub-product.service';
import * as sidebarlabel from '../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../assets/i18n/jp.json';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.scss']
})
export class ProductStoreComponent implements OnInit {
  seo_keyword = ""
  seo_title = ""
  seo_description = ""
  bannerData: any;
  seodata: any;
  localstoragelanguage: any;
  msglabel: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _seoService: SeoService,
    private _title: Title,
    public meta: Meta,
    public _subProductService: SubProductService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getBannerData();
    // this.getseodata();
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
      this._seoService.setTitle("CAD & BIM software plugin | Web and Mobile Applications for AEC ");
      this._seoService.updateMetaData({
        title: 'CAD & BIM software plugin | Web and Mobile Applications for AEC ',
        description: 'nCircle Tech has a range of CAD and BIM software products, and web and mobile applications for AEC are also developed here catering to clients needs. ',
        image: `${environment.baseSiteUrl}/assets/img/page-title-images/product-store.jpg`,
        keywords: ''
      })
    } else if (this.localstoragelanguage == "IN") {
      this._seoService.setTitle("CAD & BIM software plugin | Web and Mobile Applications for AEC ");
      this._seoService.updateMetaData({
        title: 'CAD & BIM software plugin | Web and Mobile Applications for AEC ',
        description: 'nCircle Tech has a range of CAD and BIM software products, and web and mobile applications for AEC are also developed here catering to clients needs. ',
        image: `${environment.baseSiteUrl}/assets/img/page-title-images/product-store.jpg`,
        keywords: ''
      })
    }
    else {
      this._seoService.setTitle("CADおよびBIMソフトウェアのプラグイン | AEC向けのWebおよびモバイルアプリケーション");
      this._seoService.updateMetaData({
        title: 'CADおよびBIMソフトウェアのプラグイン | AEC向けのWebおよびモバイルアプリケーション',
        description: 'nCircle Techは、CADおよびBIMソフトウェア製品の幅広いラインナップを取り揃え、AEC向けのWebおよびモバイルアプリケーションもクライアントのニーズに対応して開発されています。',
        image: `${environment.baseSiteUrl}/assets/img/page-title-images/product-store.jpg`,
        keywords: ''
      })
    }

  }

  apiData$ = this._activatedRoute.data.pipe(
    map(data => {

      // const detail = data.apiData.results;

      // this._title.setTitle(`Products | nCircle Tech`);
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
      console.log(data.apiData);


      return data.apiData
    }),
  )


  passdata(obj: any) {
    console.log("hhhh", obj)
    this._subProductService.seo = obj.seo_title
  }

  getBannerData() {
    this._subProductService.getBannerData().subscribe(response => {
      this.bannerData = response;
    });
  }
  getseodata() {
    this._subProductService.getseodata().subscribe(response => {
      this.seodata = response;
      // console.log(response);

      const detail = this.seodata
      this._title.setTitle(`${detail.seo_title}`);
      // console.log(detail.seo_title);

      this._seoService.updateMetaData(
        {
          title: detail.seo_title,
          description: detail.seo_description,
          keywords: detail.seo_keywords,
          image: `${environment.baseSiteUrl}/assets/img/page-title-images/product-store.jpg`,

        }
      );

    });
  }
  page: number = 0
  slug: any
  navigateBackToSubProductList(obj: any) {
    // Increment the current page
    const nextPage: any = this.page + 1;
    this.slug = obj.slug
    console.log("abc", this.slug);
    localStorage.setItem('pageNumber', nextPage)
    localStorage.setItem('slug', this.slug)
    // Navigate back to the sub-product list with the updated page query parameter
    // if (this.localstoragelanguage == 'IN')
    //   this._router.navigate(['/products-store/' + this.slug], { queryParams: { page: nextPage } });
    if (this.localstoragelanguage == 'IN') {
      this._router.navigate(['/products-store/' + this.slug], { queryParams: { page: nextPage } });

    } else {
      this._router.navigate([this.localstoragelanguage + '/products-store/' + this.slug], { queryParams: { page: nextPage } });



    }
  }
}
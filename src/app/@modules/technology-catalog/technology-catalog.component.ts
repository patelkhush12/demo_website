import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SeoService } from '../shared/@services/seo.service';
import { TechnologyCatalogService } from './@service/technology-catalog.service';
import { response } from 'express';
import * as sidebarlabel from '../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../assets/i18n/jp.json';

@Component({
  selector: 'app-technology-catalog',
  templateUrl: './technology-catalog.component.html',
  styleUrls: ['./technology-catalog.component.scss']
})
export class TechnologyCatalogComponent implements OnInit {
  bannerData: any;
  seodata: any;
  msglabel: any;
  localstoragelanguage: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _technologyCatalogService: TechnologyCatalogService,
    private _seoService: SeoService,
    private _title: Title,
    // public meta: Meta,

  ) { }

  ngOnInit() {
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

    }
    else {
      this.msglabel = sidebarlabel1
    }
    if (this.localstoragelanguage == "EN") {
      this._seoService.setTitle("Technology Catalog | nCircle Tech");
      this._seoService.updateMetaData({
        title: 'Technology Catalog | nCircle Tech',
        description: 'Discover the Future in Our Technology Catalog. Explore a diverse range of cutting-edge solutions designed to elevate businesses across industries. ',
        image: '',
        keywords: ''
      })
    } else if (this.localstoragelanguage == "IN") {
      this._seoService.setTitle("Technology Catalog | nCircle Tech");
      this._seoService.updateMetaData({
        title: 'Technology Catalog | nCircle Tech',
        description: 'Discover the Future in Our Technology Catalog. Explore a diverse range of cutting-edge solutions designed to elevate businesses across industries. ',
        image: '',
        keywords: ''
      })
    }
    else {
      this._seoService.setTitle("テクノロジーカタログ | nCircle Tech");
      this._seoService.updateMetaData({
        title: 'テクノロジーカタログ | nCircle Tech',
        description: '当社のテクノロジーカタログで未来を発見してください。様々な業界でビジネスを高めるために設計された最先端のソリューションを探索してください',
        image: '',
        keywords: ''
      })
    }
  }

  techCatalogListData: any;

  apiData$: Observable<any> = this._activatedRoute.data.pipe(
    map(data => {
      this.techCatalogListData = data.apiData;
      // this.page_size = data.apiData.page_size;
      return data.apiData
    }),
  );

  page = 1;
  page_size = 6;
  search = '';

  onPageChange(pageEvent: any) {
    if (pageEvent != this.page) {
      this.page = pageEvent;
      this._technologyCatalogService.getAllTechCatalog({ page: this.page, page_size: this.page_size }).subscribe(next => {
        this.techCatalogListData = next;
        window.scroll({ top: 0, behavior: 'smooth' });
      });
    }
  }

  onSearchChange(search: any) {
    if (search != this.search) {
      this.search = search;
      this._technologyCatalogService.getAllTechCatalog({ page: this.page, page_size: this.page_size, search: search }).subscribe(next => {
        this.techCatalogListData = next;
      })
    }
  }

  getBannerData() {
    this._technologyCatalogService.getBannerData().subscribe(response => {
      this.bannerData = response;
    });
  }
  getseodata() {
    this._technologyCatalogService.getseodata().subscribe(response => {
      this.seodata = response
      const detail = this.seodata
      this._title.setTitle(`${detail.seo_title}`);
      console.log(detail.seo_title);

      this._seoService.updateMetaData(
        {
          title: detail.seo_title,
          description: detail.seo_description,
          keywords: detail.seo_keywords,
          image: ''
        }
      );


    })
  }
}

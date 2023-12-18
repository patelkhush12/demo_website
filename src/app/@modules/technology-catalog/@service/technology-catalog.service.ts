import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Result {
  id: number;
  title: string;
  tags: number[];
  url: string;
}

export interface TechnologyCatalogListResponse {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}
export interface SeolistResponse {
  pagename: string
  seo_title: string
  seo_description: string
  seo_keywords: string
}
@Injectable({
  providedIn: 'root'
})
export class TechnologyCatalogService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  getAllTechCatalog(params: any = {}) {
    if (params.hasOwnProperty('category')) {
      params = {
        ...params,
        categories__slug: params["category"]
      };
    }
    var changelang = localStorage.getItem('language')
    changelang == 'IN' ? changelang = 'EN' : changelang;

    if (changelang) {
      return this._httpClient.get<TechnologyCatalogListResponse>(environment.apiUrl + '/tech_catalog/tech_catalog/?lang=' + changelang, { params: params })
    }
    else {
      return this._httpClient.get<TechnologyCatalogListResponse>(environment.apiUrl + '/tech_catalog/tech_catalog/?lang=', { params: params })

    }
  }

  getBannerData() {
    if (localStorage.getItem('language') === 'EN' || localStorage.getItem('language') === 'IN') {
      return this._httpClient.get<TechnologyCatalogListResponse>(environment.apiUrl + '/banner/banner/technology-catalog/?lang=' + 'EN')
    } else {
      return this._httpClient.get<TechnologyCatalogListResponse>(environment.apiUrl + '/banner/banner/ji-shu-katarogu/?lang=' + 'JP')

    }
  }
  getseodata() {
    return this._httpClient.get<SeolistResponse>(environment.apiUrl + '/main_page_seo/main_page_seo/Technology_Catalog')

  }
}

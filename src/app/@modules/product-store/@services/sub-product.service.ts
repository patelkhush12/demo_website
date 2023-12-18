import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';

export interface Result {
  title: string;
  slug: string;
  logo: string;
  description: string;
  download_link: string;
  version: string;
  release_date: string;
  product: number;
}

export interface SubProductListResponse {
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
export class SubProductService {

  seo: any = ""

  constructor(
    private _httpClient: HttpClient,
  ) { }

  getAllSubProducts(slug: string, params: any = {}) {
    if (params.hasOwnProperty('category')) {
      params = {
        ...params,
        categories__slug: params["category"]
      };
    }
    var changelang = localStorage.getItem('language')
    changelang == 'IN' ? changelang = 'EN' : changelang;

    if (changelang) {
      return this._httpClient.get<SubProductListResponse>(environment.apiUrl + '/product/public_product/' + slug + '/sub_products/?lang=' + changelang, { params: params })
    }
    else {
      return this._httpClient.get<SubProductListResponse>(environment.apiUrl + '/product/public_product/?lang=' + slug + '/sub_products/', { params: params })

    }
  }

  getBannerData() {
    if (localStorage.getItem('language') === 'EN' || localStorage.getItem('language') === 'IN') {
      return this._httpClient.get<SubProductListResponse>(environment.apiUrl + '/banner/banner/product/?lang=' + 'EN')
    } else {
      return this._httpClient.get<SubProductListResponse>(environment.apiUrl + '/banner/banner/zhi-pin/?lang=' + 'JP')

    }
  }
  getseodata() {
    return this._httpClient.get<SeolistResponse>(environment.apiUrl + '/main_page_seo/main_page_seo/product')

  }
}

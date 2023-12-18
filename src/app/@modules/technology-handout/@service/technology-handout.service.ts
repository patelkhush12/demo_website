import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Result {
  id: number;
  title: string;
  slug: string;
  image: string;
  description: string;
  publish: boolean;
  file: string;
  created_at: string;
  updated_at: string;
  authors: number[];
  categories: number[];
  views: number;
  technologyhandout_date: string;

}
export interface SeolistResponse {
  pagename: string
  seo_title: string
  seo_description: string
  seo_keywords: string
}
export interface TechnologyHandoutListResponse {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

@Injectable({
  providedIn: 'root'
})
export class TechnologyHandoutService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  getAllTechnologyHandout(params: any = {}) {
    if (params.hasOwnProperty('category')) {
      params = {
        ...params,
        categories__slug: params["category"]
      };
    }
    var changelang = localStorage.getItem('language')
    changelang == 'IN' ? changelang = 'EN' : changelang;

    if (changelang) {
      return this._httpClient.get<TechnologyHandoutListResponse>(environment.apiUrl + '/tech_handout/public_handout/?lang=' + changelang, { params: params })
    }
    else {
      return this._httpClient.get<TechnologyHandoutListResponse>(environment.apiUrl + '/tech_handout/public_handout/', { params: params })

    }
  }

  getSingleTechnologyHandout(slug: string) {
    return this._httpClient.get<TechnologyHandoutListResponse>(environment.apiUrl + '/tech_handout/public_handout/' + slug + "/")
  }


  getRecentTechnologyHandout() {
    var changelang = localStorage.getItem('language')
    changelang == 'IN' ? changelang = 'EN' : changelang;

    if (changelang) {
      return this._httpClient.get<TechnologyHandoutListResponse>(environment.apiUrl + '/tech_handout/recent_handout/?lang=' + changelang)
    } else {
      return this._httpClient.get<TechnologyHandoutListResponse>(environment.apiUrl + '/tech_handout/recent_handout/')

    }
  }

  getTechnologyHandoutCategories() {
    var changelang = localStorage.getItem('language')
    changelang == 'IN' ? changelang = 'EN' : changelang;
    if (changelang) {
      return this._httpClient.get<TechnologyHandoutListResponse>(environment.apiUrl + '/tech_handout/handout_categories/?lang=' + changelang)
    } else {
      return this._httpClient.get<TechnologyHandoutListResponse>(environment.apiUrl + '/tech_handout/handout_categories/?lang=')

    }
  }

  getSingleCaseStudyComment(slug: string, params: any) {
    return this._httpClient.get<TechnologyHandoutListResponse>(environment.apiUrl + '/tech_handout/public_handout/' + slug + '/comment/', { params: params })
  }

  getBannerData() {
    if (localStorage.getItem('language') === 'EN' || localStorage.getItem('language') === 'IN') {
      return this._httpClient.get<TechnologyHandoutListResponse>(environment.apiUrl + '/banner/banner/technology-handout/?lang=' + 'EN')
    }
    else {
      return this._httpClient.get<TechnologyHandoutListResponse>(environment.apiUrl + '/banner/banner/ji-shu-zi-liao/?lang=' + 'JP')

    }
  }
  getseodata() {
    return this._httpClient.get<SeolistResponse>(environment.apiUrl + '/main_page_seo/main_page_seo/Technology_Handout')

  }
}

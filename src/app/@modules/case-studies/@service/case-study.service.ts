import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Result {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  authors: number[];
  publish: boolean;
  featured: boolean;
  created_at: string;
  updated_at: string;
  categories: number[];
  views: number;
  casestudy_date: string;
  language: any


}
export interface SeolistResponse {
  pagename: string
  seo_title: string
  seo_description: string
  seo_keywords: string
}

export interface CaseStudyListResponse {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

@Injectable({
  providedIn: 'root'
})
export class CaseStudyService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  getAllCaseStudy(queryParams: any = {}) {
    if (queryParams.hasOwnProperty('category')) {
      queryParams = {
        ...queryParams,
        categories__slug: queryParams["category"]
      };
    }
    var changelang = localStorage.getItem('language');
    changelang == 'IN' ? changelang = 'EN' : changelang;

    if (changelang) {
      // console.log(changelang);

      return this._httpClient.get<CaseStudyListResponse>(environment.apiUrl + '/case_study/public_case_study_list/?lang=' + changelang, { params: queryParams });

    }
    else {
      // console.log(changelang);

      return this._httpClient.get<CaseStudyListResponse>(environment.apiUrl + '/case_study/public_case_study_list/?lang=', { params: queryParams });
    }
    // return this._httpClient.get<CaseStudyListResponse>(environment.apiUrl + '/case_study/public_case_study_list/', { params: queryParams }
    // )
  }

  getRecentCaseStudy() {
    var changelang = localStorage.getItem('language');
    changelang == 'IN' ? changelang = 'EN' : changelang;
    if (changelang) {
      return this._httpClient.get<CaseStudyListResponse>(environment.apiUrl + '/case_study/recent_case_study/?lang=' + changelang);
    } else {
      return this._httpClient.get<CaseStudyListResponse>(environment.apiUrl + '/case_study/recent_case_study/?lang=');

    }
    // return this._httpClient.get<CaseStudyListResponse>(environment.apiUrl + '/case_study/recent_case_study/')
  }

  getCaseStudyCategories() {
    var changelang = localStorage.getItem('language');
    changelang == 'IN' ? changelang = 'EN' : changelang;

    if (changelang) {
      // console.log(changelang);

      return this._httpClient.get<CaseStudyListResponse>(environment.apiUrl + '/case_study/case_study_categories/?lang=' + changelang);

    }
    else {
      // console.log(changelang);

      return this._httpClient.get<CaseStudyListResponse>(environment.apiUrl + '/case_study/case_study_categories/?lang=');
    }
    // return this._httpClient.get<CaseStudyListResponse>(environment.apiUrl + '/case_study/case_study_categories/');
  }

  getSingleCaseStudy(slug: string) {
    return this._httpClient.get<CaseStudyListResponse>(environment.apiUrl + '/case_study/public_case_study_list/' + slug + '/')
  }

  getSingleCaseStudyComment(slug: string, params: any) {
    return this._httpClient.get<CaseStudyListResponse>(environment.apiUrl + '/case_study/public_case_study_list/' + slug + '/comment/', { params: params })
  }

  getBannerDataCaseStudy() {
    if (localStorage.getItem('language') === 'EN' || localStorage.getItem('language') === 'IN') {
      return this._httpClient.get<CaseStudyListResponse>(environment.apiUrl + '/banner/banner/case-study/?lang=' + 'EN')
    }
    else {
      return this._httpClient.get<CaseStudyListResponse>(environment.apiUrl + '/banner/banner/shi-li-yan-jiu/?lang=' + 'JP')

    }

  }
  getseodata() {
    return this._httpClient.get<SeolistResponse>(environment.apiUrl + '/main_page_seo/main_page_seo/Case_study')

  }
}

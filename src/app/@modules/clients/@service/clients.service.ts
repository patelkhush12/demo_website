import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { environment } from 'src/environments/environment';
export interface SeolistResponse {
  pagename: string
  seo_title: string
  seo_description: string
  seo_keywords: string
}
@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    private _httpClient: HttpClient
  ) {
  }

  getAllTestimonials(params: any = {}) {

    if (params.hasOwnProperty('category')) {
      params = {
        ...params,
        categories__slug: params["category"]
      };
    }
    var changelang = localStorage.getItem('language');
    changelang == 'IN' ? changelang = 'EN' : changelang;

    if (changelang) {
      return this._httpClient.get(environment.apiUrl + '/client/testimonial_public/?lang=' + changelang, { params: params });

    }
    else {
      console.log(changelang);

      return this._httpClient.get(environment.apiUrl + '/client/testimonial_public/?lang=');
    }    // return this._httpClient.get(environment.apiUrl + '/client/testimonial_public/', { params: params });



  }

  getAllIndustries() {
    var changelang = localStorage.getItem('language');
    changelang == 'IN' ? changelang = 'EN' : changelang;

    if (changelang) {
      return this._httpClient.get(environment.apiUrl + '/client/industry_wise_company/?lang=' + changelang);

    }
    else {
      console.log(changelang);

      return this._httpClient.get(environment.apiUrl + '/client/industry_wise_company/?lang=');
    }
    // return this._httpClient.get(environment.apiUrl + '/client/industry_wise_company/');
  }
  getAllpartner(params: any = {}) {


    ('this is page')
    // if (params.hasOwnProperty('category')) {
    //   params = {
    //     ...params,
    //     categories__slug: params["category"]
    //   };
    // }
    return this._httpClient.get(environment.apiUrl + '/client/partner_public/', { params: params });

  }


  getBannerData() {
    if (localStorage.getItem('language') === 'EN' || localStorage.getItem('language') === 'IN') {
      return this._httpClient.get(environment.apiUrl + '/banner/banner/clients/?lang=' + 'EN')
    } else {
      return this._httpClient.get(environment.apiUrl + '/banner/banner/gu-ke/?lang=' + 'JP')

    }
  }

  getseodata() {
    return this._httpClient.get<SeolistResponse>(environment.apiUrl + '/main_page_seo/main_page_seo/Client_and_Partner')
  }

}

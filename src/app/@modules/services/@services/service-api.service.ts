import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
export interface Data { }

export interface Component {
  id: number;
  type: string;
  data: Data;
}

export interface Service_component {
  id: number;
  component: Component;
  order: number;
}

export interface Service_kpi {
  id: number;
  kpi: string;
  kpi_title: string;
}

export interface SingleServiceApiResponse {
  id: number;
  title: string;
  slug: string;
  list_description: string;
  list_image_1: string;
  list_image_2: string;
  list_image_3: string;
  list_kpi: string;
  list_kpi_title: string;
  service_component: Service_component[];
  service_kpi: Service_kpi[];
}
export interface SeolistResponse {
  pagename: string
  seo_title: string
  seo_description: string
  seo_keywords: string
}
export interface ServiceApiResponse {
  count: number;
  next: string;
  previous: string;
  results: SingleServiceApiResponse[];
}
export interface SingleSubServiceApiResponse {
  // id: number;

  title: string;
  slug: string;
  lp_title3: string;
  list_description3: string;
  lp_title4: string;
  tags: string;
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  language: string
  list_description: string;
  lp_title1: string;
  list_description1: string;
  lp_title2: string;
  list_description2: string;
  lp_image_3: string;
  main_service: { id: number }
}
@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {
  getSingleDetail: any;

  constructor(
    private _http: HttpClient
  ) { }

  getAllService(params: any) {
    var changelang = localStorage.getItem('language')
    changelang == 'IN' ? changelang = 'EN' : changelang;

    if (changelang) {

      return this._http.get<ServiceApiResponse>(environment.apiUrl + "/service/service/?lang=" + changelang, { params: params });
    } else {
      return this._http.get<ServiceApiResponse>(environment.apiUrl + "/service/service/?lang=", { params: params });

    }
  }

  getSingleService(slug: string) {
    return this._http.get<SingleServiceApiResponse>(environment.apiUrl + "/service/service/" + slug + "/");
  }

  getBannerData() {
    if (localStorage.getItem('language') === 'EN' || localStorage.getItem('language') === 'IN') {
      return this._http.get(environment.apiUrl + '/banner/banner/our-services/?lang=' + 'EN')
    }
    else {
      return this._http.get(environment.apiUrl + '/banner/banner/si-tachinosabisu/?lang=' + 'JP')

    }
  }
  getseodata() {
    return this._http.get<SeolistResponse>(environment.apiUrl + '/main_page_seo/main_page_seo/Service')

  }
  getAllsubService() {
    var changelang = localStorage.getItem('language')
    changelang == 'IN' ? changelang = 'EN' : changelang;
    if (changelang) {
      return this._http.get(environment.apiUrl + "/service/public_service_landingpage/?lang=" + changelang);
    } else {
      return this._http.get(environment.apiUrl + "/service/public_service_landingpage/?lang=");

    }
  }
  getSubSingleService(slug: string) {
    var changelang = localStorage.getItem('language')
    changelang == 'IN' ? changelang = 'EN' : changelang;

    if (changelang) {
      return this._http.get<SingleSubServiceApiResponse>(environment.apiUrl + "/service/public_service_landingpage/" + slug + "/?lang=" + changelang);
    } else {
      return this._http.get<SingleSubServiceApiResponse>(environment.apiUrl + "/service/public_service_landingpage/" + slug + "/?lang=");

    }
  }
}

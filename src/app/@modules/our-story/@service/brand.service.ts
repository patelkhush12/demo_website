import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
export interface Data { }
export interface Component {
  id: number;
  type: string;
  data: Data;
}
export interface Brand_component {
  id: number;
  component: Component;
  order: number;
}
export interface SinglebrandApiResponse {
  id: number;
  sec1_image1: string;

  slug: string;
  sec1_image2: string;
  sec1_title: string;
  sec1_description: string;
  sec2_title: string;
  sec2_description: string;
  sec3_description: string;
  sec3_image1: string
  sec3_image2: string
  sec3_title: string

  // list_description: string;
  // list_image_1: string;
  // list_image_2: string;
  // list_image_3: string;
  // list_kpi: string;
  // list_kpi_title: string;
  brand_component: Brand_component[];
  // service_kpi: Service_kpi[];
}
export interface BrandApiResponse {
  bands: any;
  count: number;
  next: string;
  previous: string;
  results: SinglebrandApiResponse[];
}

// const abc = localStorage.getItem('language');
// if(abc)
// {
//   return this._httpClient.get(environment.apiUrl + '/blog/recent_blog/?lang='+abc );

// }
// else
// {
//   return this._httpClient.get(environment.apiUrl + '/blog/recent_blog/?lang=' );
// }
@Injectable({
  providedIn: 'root'
})
export class BrandApiBrand {

  constructor(private _http: HttpClient
  ) { }
  getAllbrand() {
    var changelang = localStorage.getItem('language');
    changelang == 'IN' ? changelang = 'EN' : changelang;

    if (changelang) {
      return this._http.get<BrandApiResponse>(environment.apiUrl + "/about_us/public_our_story/?lang=" + changelang);
    }
    else {
      return this._http.get(environment.apiUrl + '/blog/recent_blog/?lang=');
    }
  }

  getSinglebrand(id: string) {

    return this._http.get<SinglebrandApiResponse>(environment.apiUrl + "/about_us/public_our_story/" + id + "/");
  }

  getBannerData() {
    if (localStorage.getItem('language') === 'EN' || localStorage.getItem('language') === 'IN') {
      return this._http.get(environment.apiUrl + '/banner/banner/our-story/?lang=' + 'EN')
    } else {
      return this._http.get(environment.apiUrl + '/banner/banner/si-tachinowu-yu/?lang=' + 'JP')

    }
  }

}

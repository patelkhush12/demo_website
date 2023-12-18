import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
export class TeamService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  getAllTeam() {
    var changelang = localStorage.getItem('language');
    changelang == 'IN' ? changelang = 'EN' : changelang;

    if (changelang) {
      return this._httpClient.get(environment.apiUrl + '/about_us/public_team/?lang=' + changelang);

    }
    else {
      return this._httpClient.get(environment.apiUrl + '/about_us/public_team/?lang=');
    }
  }

  getAllGallery() {
    var changelang = localStorage.getItem('language');
    changelang == 'IN' ? changelang = 'EN' : changelang;

    if (changelang) {
      return this._httpClient.get(environment.apiUrl + '/about_us/public_life_at/?lang=' + changelang);

    }
    return this._httpClient.get(environment.apiUrl + '/about_us/public_life_at/?lang=');
  }

  getBannerData() {
    if (localStorage.getItem('language') === 'EN' || localStorage.getItem('language') === 'IN') {
      return this._httpClient.get(environment.apiUrl + '/banner/banner/our-team/?lang=' + 'EN');
    }
    else {
      return this._httpClient.get(environment.apiUrl + '/banner/banner/si-tachinochimu/?lang=' + 'JP');

    }
  }
  getseodata() {
    return this._httpClient.get<SeolistResponse>(environment.apiUrl + '/main_page_seo/main_page_seo/team')

  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Result {
  id: number;
  title: string;
  slug: string;
  webinar_date: string;
  image: string;
  description: string;
  publish: boolean;
  register_link: string;
  created_at: string;
  updated_at: string;
  authors: number[];
  categories: number[];
  hosts: number[];
  views: number;
}
export interface SeolistResponse {
  pagename: string
  seo_title: string
  seo_description: string
  seo_keywords: string
}
export interface WebinarListResponse {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}




export interface Result {
  id: number;
  name: string;
  slug: string;
}

export interface WebinarListCategoryResponse {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}


export interface TimeLeft {
  secondsToDday: any;
  minutesToDday: any;
  hoursToDday: any;
  daysToDday: any;
}

@Injectable({
  providedIn: 'root'
})
export class WebinarService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  getAllWebinar(params: any) {
    if (params.hasOwnProperty('category')) {
      params = {
        ...params,
        categories__slug: params["category"]
      };
    }
    var changelang = localStorage.getItem('language')
    changelang == 'IN' ? changelang = 'EN' : changelang;

    if (changelang) {
      return this._httpClient.get<WebinarListResponse>(environment.apiUrl + '/webinar/public_webinar_list/?lang=' + changelang, { params: params })
    }
    else {
      return this._httpClient.get<WebinarListResponse>(environment.apiUrl + '/webinar/public_webinar_list/?lang=', { params: params })

    }
  }

  getSingleWebinar(slug: string) {
    return this._httpClient.get<WebinarListResponse>(environment.apiUrl + '/webinar/public_webinar_list/' + slug + '/',)
  }
  getRecentWebinar() {
    var changelang = localStorage.getItem('language')
    changelang == 'IN' ? changelang = 'EN' : changelang;

    if (changelang) {
      return this._httpClient.get<WebinarListResponse>(environment.apiUrl + '/webinar/recent_webinar/?lang=' + changelang)
    } else {
      return this._httpClient.get<WebinarListResponse>(environment.apiUrl + '/webinar/recent_webinar/')

    }
  }

  getWebinarCategories() {
    var changelang = localStorage.getItem('language')
    changelang == 'IN' ? changelang = 'EN' : changelang;
    if (changelang) {
      return this._httpClient.get<WebinarListResponse>(environment.apiUrl + '/webinar/webinar_categories/?lang=' + changelang)
    }
    else {
      return this._httpClient.get<WebinarListResponse>(environment.apiUrl + '/webinar/webinar_categories/?lang=')

    }
  }

  getSingleWebinarComment(slug: string, params: any) {
    return this._httpClient.get<WebinarListResponse>(environment.apiUrl + '/webinar/public_webinar_list/' + slug + '/comment/', { params: params })
  }

  getTimeDifference(dDay: any) {
    let timeDifference = dDay.getTime() - new Date().getTime();
    return this.allocateTimeUnits(timeDifference);
  }

  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;

  allocateTimeUnits(timeDifference: any): TimeLeft {
    let secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    let minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    let hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    let daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
    return {
      secondsToDday: secondsToDday,
      minutesToDday: minutesToDday,
      hoursToDday: hoursToDday,
      daysToDday: daysToDday,
    }
  }

  getBannerData() {
    if (localStorage.getItem('language') === 'EN' || localStorage.getItem('language') === 'IN') {
      return this._httpClient.get<WebinarListResponse>(environment.apiUrl + '/banner/banner/webinar/?lang=' + 'EN')
    } else {
      return this._httpClient.get<WebinarListResponse>(environment.apiUrl + '/banner/banner/uebina/?lang=' + 'JP')

    }
  }
  getseodata() {
    return this._httpClient.get<SeolistResponse>(environment.apiUrl + '/main_page_seo/main_page_seo/Webinar')

  }
}

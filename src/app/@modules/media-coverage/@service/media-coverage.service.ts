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
  created_at: string;
  updated_at: string;
  categories: number[];
  views: number;
}

export interface MediaCoverageListResponse {
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
export class MediaCoverageService {

  getSingleMediaCoverageComment(slug: string, params: any): any {
    // /api/v1/news_articles/private_news_list/{slug_slug}/comment/
    return this._httpClient.get<any>(environment.apiUrl + '/news_articles/public_news_list/' + slug + '/comment/', { params: params })
  }

  constructor(
    private _httpClient: HttpClient
  ) { }
  // const abc = localStorage.getItem('language');
  // if(abc)
  // {
  //   return this._httpClient.get(environment.apiUrl + '/blog/recent_blog/?lang='+abc + slug + '/comment/',{params:params} );

  // }
  // else
  // {
  //   return this._httpClient.get(environment.apiUrl + '/blog/recent_blog/?lang=' );
  // }
  getAllMediaCoverage(queryParams: any) {
    if (queryParams.hasOwnProperty('category')) {
      queryParams = {
        ...queryParams,
        categories__slug: queryParams["category"]
      };
    }
    var changelang = localStorage.getItem('language');
    changelang == 'IN' ? changelang = 'EN' : changelang;

    if (changelang) {

      return this._httpClient.get<MediaCoverageListResponse>(environment.apiUrl + '/news_articles/public_news_list/?lang=' + changelang, { params: queryParams });

    }
    else {
      return this._httpClient.get<MediaCoverageListResponse>(environment.apiUrl + '/news_articles/public_news_list/?lang=');
    }
    // return this._httpClient.get<MediaCoverageListResponse>(environment.apiUrl + '/news_articles/public_news_list/', { params: queryParams })
  }

  getSingleMediaCOverage(slug: string) {
    return this._httpClient.get<MediaCoverageListResponse>(environment.apiUrl + '/news_articles/public_news_list/' + slug + '/')
  }

  getRecentMediaCoverage() {
    var changelang = localStorage.getItem('language');
    changelang == 'IN' ? changelang = 'EN' : changelang;

    if (changelang) {
      return this._httpClient.get<MediaCoverageListResponse>(environment.apiUrl + '/news_articles/recent_news/?lang=' + changelang);

    }
    else {
      return this._httpClient.get<MediaCoverageListResponse>(environment.apiUrl + '/news_articles/recent_news/?lang=');
    }
    // return this._httpClient.get<MediaCoverageListResponse>(environment.apiUrl + '/news_articles/recent_news/')
  }

  getMediaCoverageCategories() {
    var changelang = localStorage.getItem('language');
    changelang == 'IN' ? changelang = 'EN' : changelang;
    if (changelang) {
      return this._httpClient.get<MediaCoverageListResponse>(environment.apiUrl + '/news_articles/news_categories/?lang=' + changelang)
    } else {
      return this._httpClient.get<MediaCoverageListResponse>(environment.apiUrl + '/news_articles/news_categories/?lang=')

    }
  }

  getBannerData() {
    if (localStorage.getItem('language') === 'EN' || localStorage.getItem('language') === 'IN') {
      return this._httpClient.get<MediaCoverageListResponse>(environment.apiUrl + '/banner/banner/media-coverage/?lang=' + 'EN')
    } else {
      return this._httpClient.get<MediaCoverageListResponse>(environment.apiUrl + '/banner/banner/medeiajie-zai/?lang=' + 'JP')

    }
  }
  getseodata() {
    return this._httpClient.get<SeolistResponse>(environment.apiUrl + '/main_page_seo/main_page_seo/media_coverage')

  }
}

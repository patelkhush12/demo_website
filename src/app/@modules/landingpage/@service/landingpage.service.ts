import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LandingpageService {

  constructor(private _httpClient: HttpClient) { }

  // getSingleMediaCoverageComment(slug: string, params: any): any {
  //   return this._httpClient.get<any>(environment.apiUrl + '/news_articles/public_news_list/' + slug + '/comment/', { params: params })
  // }

}

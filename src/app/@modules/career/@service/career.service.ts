import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  getAllGallery() {
    return this._httpClient.get(environment.apiUrl + '/about_us/public_life_at/');
  }

  getAllCareer(params: any = {}) {
    if (params.hasOwnProperty('category')) {
      params = {
        ...params,
        categories__slug: params["category"]
      };
    }
    return this._httpClient.get(environment.apiUrl + '/career/public_career/', { params: params });
  }

}

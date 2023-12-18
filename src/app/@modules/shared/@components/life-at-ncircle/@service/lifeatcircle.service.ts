import { Injectable } from '@angular/core';
// import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

export interface Data { }
export interface Component {
  id: number;
  type: string;
  data: Data;
}
export interface Lifeatcircle_component {
  id: number;
  component: Component;
  order: number;
}
export interface SingleLifeatcircleApiResponse {
  id: number;
  title: string;
  slug: string;
  content:string;
  Lifeatcircle_component: Lifeatcircle_component[];
}
export interface lifeatcircleApiResponse {
  count: number;
  next: string;
  previous: string;
  results: SingleLifeatcircleApiResponse[];
}

@Injectable({
  providedIn: 'root'
})
export class LifeatcircleService {

  constructor(    private _http: HttpClient
    ) { }
    getAlllifeatcircle(params: any) {
      return this._http.get<lifeatcircleApiResponse>(environment.apiUrl + "/about_us/private_life_at/", { params: params });
    }
  
    getSingleService(slug: string) {
      return this._http.get<SingleLifeatcircleApiResponse>(environment.apiUrl + "/about_us/private_life_at/" + slug + "/");
    }
  
}

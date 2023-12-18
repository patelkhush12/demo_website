import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
export interface Data { }

export interface LandingpageServiceApiResponse{
    // id: number;
    
    title: string;
    slug: string;
    landing_page_url:string;
    lp_image_1:string;
    lp_title1:string;
    list_description1:string;
    lp_title2:string;
    list_description2:string;
    lp_image_3:string;
    lp_title3:string;
    list_description3:string;
    lp_title4:string;
    tags:string;
    // lp_title3:string;
    // list_description3:string;
    // lp_title4:string;
    // tags:string;
    // seo_title:string;
    // seo_description:string;
    // seo_keywords:string;
    // language:string
    // list_description: string;
    // lp_title1: string;
    // list_description1: string;
    // lp_title2: string;
    // list_description2: string;
    // lp_image_3: string;
    main_service:{id:number}
  }
  export class LandingPage1ApiService {
    constructor(
        private _http: HttpClient
      ) { }
    getSubSingleService(slug: string){
        
        return this._http.get<LandingpageServiceApiResponse>(environment.apiUrl + "/landing_pages/landingpage/"+ slug + "/");
    
      }
  }
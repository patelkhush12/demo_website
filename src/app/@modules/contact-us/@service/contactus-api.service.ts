import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
export interface Data { }

export interface Component {
    id: number;
    type: string;
    data: Data;
}
export interface SeolistResponse {
    pagename: string
    seo_title: string
    seo_description: string
    seo_keywords: string
}


export interface contact_component {
    id: number;
    component: Component;
    order: number;
}

export interface Container_kpi {
    id: number;
    kpi: string;
    kpi_title: string;
}

export interface Singlecontact_ApiResponse {
    // id: number;
    //   title: string;
    slug: string;
    address: string
    //   list_description: string;
    // icon: string;
    email: string
    phone: string;
    //   list_kpi_title: string;
    contact_component: contact_component[];
    // Container_kpi: Container_kpi[];
}

export interface contactApiResponse {
    // getAllcontact: any;
    // icon: string;
    // getAllcontainer(): import("rxjs").Observable<any>;
    // getSingleContact(slug: any): unknown;
    count: number;
    next: string;
    previous: string;
    results: Singlecontact_ApiResponse[];
}
@Injectable({
    providedIn: 'root'
})
export class ContantApiContant {

    constructor(
        private _http: HttpClient
    ) { }
    // const abc = localStorage.getItem('language');
    // if(abc)
    // {
    //   return this._httpClient.get(environment.apiUrl + '/blog/public_blog_list/?lang='+abc , { params: params });

    // }
    // else
    // {
    //   console.log(abc);

    //   return this._httpClient.get(environment.apiUrl + '/blog/public_blog_list/?lang=', { params: params } );
    // }
    getAllcontact() {
        var changelang = localStorage.getItem('language');
        // changelang == 'IN' ? changelang = 'EN' : changelang;
        changelang == 'IN' ? changelang = 'EN' : changelang;


        if (changelang) {
            return this._http.get<contactApiResponse>(environment.apiUrl + '/contact_us/public_contact_details/?lang=' + changelang);

        }
        else {
            console.log(changelang);

            return this._http.get<contactApiResponse>(environment.apiUrl + '/contact_us/public_contact_details/?lang=');
        }
        // return this._http.get<contactApiResponse>(environment.apiUrl + "/contact_us/public_contact_details/");
    }

    getSingleContact(id: string) {
        return this._http.get<Singlecontact_ApiResponse>(environment.apiUrl + "contact_us/public_contact_details/" + id + "/");
    }

    getBannerData() {

        if (localStorage.getItem('language') === 'EN' || localStorage.getItem('language') === 'IN') {
            return this._http.get(environment.apiUrl + '/banner/banner/contact-us/?lang=' + 'EN')
        }
        else {
            return this._http.get(environment.apiUrl + '/banner/banner/owen-ihe-wase/?lang=' + 'JP')

        }
    }
    getseodata() {
        return this._http.get<SeolistResponse>(environment.apiUrl + '/main_page_seo/main_page_seo/Contact_us')

    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WrapperResolver implements Resolve<any> {
  language: any
  constructor(private _httpClient: HttpClient) {
    localStorage.getItem('language') ? localStorage.getItem('language') : localStorage.setItem("language", "IN")
    // var changelang = localStorage.getItem('language')
    // changelang == 'IN' ? changelang = 'EN' : changelang;

    this.language = localStorage.getItem('language') && localStorage.getItem('language')
    // console.log(this.language)
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    var changelang = localStorage.getItem('language')
    changelang == 'IN' ? changelang = 'EN' : changelang;
    const currentURL = window.location.href;
    console.log(currentURL);
    const url = new URL(currentURL);
    const pathName = url.pathname; // This will give you "/EN/blogs/kja"

    // Split the path name by '/' to get individual parts
    const pathParts = pathName.split('/');

    // The value you want is likely at index 1 (assuming the path structure is consistent)
    const language = pathParts[1];
    if (language == 'EN' || language == "JP") {
      return this._httpClient.get(environment.apiUrl + '/home_page_content/header_footer/?lang=' + language);

    }
    if (changelang) {
      return this._httpClient.get(environment.apiUrl + '/home_page_content/header_footer/?lang=' + changelang);
    }
    else {
      return this._httpClient.get(environment.apiUrl + '/home_page_content/header_footer/?lang=' + this.language);

    }
  }
}

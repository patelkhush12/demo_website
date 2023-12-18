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
export class HomeResolver implements Resolve<any> {
  constructor(
    private httpClient: HttpClient) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    var changelang = localStorage.getItem('language')
    changelang == 'IN' ? changelang = 'EN' : changelang;
    if (changelang) {
      return this.httpClient.get(environment.apiUrl + `/home_page_content/home/?lang=` + changelang);
    } else {
      return this.httpClient.get(environment.apiUrl + `/home_page_content/home/?lang=`);

    }
  }
}

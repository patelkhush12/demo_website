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
export class IndustryListResolver implements Resolve<boolean> {

  constructor(
    private http: HttpClient,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    var changelang = localStorage.getItem('language');
    changelang == 'IN' ? changelang = 'EN' : changelang;

    if (changelang) {
      // console.log(changelang);

      return this.http.get(environment.apiUrl + '/industry/public_industry/?lang=' + changelang);

    }
    else {

      return this.http.get(environment.apiUrl + '/industry/public_industry/');
    }
  }


}


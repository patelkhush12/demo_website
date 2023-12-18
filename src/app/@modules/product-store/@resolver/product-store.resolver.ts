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
export class ProductStoreResolver implements Resolve<any> {
  constructor(
    private httpClient: HttpClient
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    var changelang = localStorage.getItem('language')
    changelang == 'IN' ? changelang = 'EN' : changelang;

    return this.httpClient.get(environment.apiUrl + '/product/public_product/?lang=' + changelang);

  }



  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
  //   const lang = localStorage.getItem('language');
  //   if(lang)
  //   {
  //   return this.httpClient.get(environment.apiUrl + '/product/public_product/'+lang);
  //   }
  //   else
  //   {
  //     return this.httpClient.get(environment.apiUrl + '/product/public_product/');
  //   }
  // }
}

import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BrandApiResponse, BrandApiBrand } from '../@service/brand.service';

@Injectable({
  providedIn: 'root'
})
export class BrandResolver implements Resolve<BrandApiResponse> {
  constructor(private _brandApiBrand: BrandApiBrand) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this._brandApiBrand.getAllbrand();
  }
}

import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BrandApiBrand, SinglebrandApiResponse } from '../@service/brand.service';

@Injectable({
  providedIn: 'root'
})
export class BrandDetailResolver implements Resolve<SinglebrandApiResponse> {
  constructor(
    private _brandApiBrand: BrandApiBrand,
    private _router: Router,
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const slug = route.params['id'];
    return this._brandApiBrand.getSinglebrand(slug).pipe(
      catchError((error) => {
        this._router.navigate(['/404']);
        return of(null);
      })
    );;
  }
}

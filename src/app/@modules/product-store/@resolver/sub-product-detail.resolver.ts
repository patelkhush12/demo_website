import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubProductDetailResolver implements Resolve<boolean> {

  constructor(
    private _http: HttpClient,
    private _router: Router,
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let slug = route.paramMap.get('slug');
    let subProductSlug = route.paramMap.get('subProductSlug');
    return this._http.get(environment.apiUrl + '/product/public_product/' + slug + '/sub_products/' + subProductSlug + '/').pipe(
      catchError((error) => {
        this._router.navigate(['/404']);
        return of(null);
      })
    );
  }

}

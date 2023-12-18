import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ServiceApiService, SingleSubServiceApiResponse } from '../@services/service-api.service';
// import {SingleSubServiceApiResponse } '../@services/service-api.service'
@Injectable({
  providedIn: 'root'
})
export class SubServiceDetailResolver implements Resolve<SingleSubServiceApiResponse> {
  constructor(
    private _serviceApiService: ServiceApiService,
    private _router: Router,
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const slug = route.params['slug'];
    return this._serviceApiService.getSubSingleService(slug).pipe(
      catchError((error) => {
        this._router.navigate(['/404']);
        return of(null);
      })
    );;
  }
}

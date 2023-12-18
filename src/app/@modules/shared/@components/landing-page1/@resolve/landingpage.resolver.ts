import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { LandingPage1ApiService, LandingpageServiceApiResponse } from '../@service/landing_page-api.service';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LandingpageResolver implements Resolve<LandingpageServiceApiResponse> {
  constructor(
    private _serviceApiService: LandingPage1ApiService,
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

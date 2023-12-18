import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
// import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Landingpage1Service, LandingpageServiceApiResponse } from '../@service/landingpage1.service';

@Injectable({
  providedIn: 'root'
})
export class Landingpage1Resolver implements Resolve<LandingpageServiceApiResponse> {
  constructor(
    private _serviceApiService: Landingpage1Service,
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

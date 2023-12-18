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
export class IndustryDetailResolver implements Resolve<boolean> {
  constructor(
    private http: HttpClient,
    private _router: Router,
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.http.get(environment.apiUrl + '/industry/public_industry/' + route.params.slug + '/').pipe(
      catchError((error) => {
        this._router.navigate(['/404']);
        return of(null);
      })
    );
  }
}

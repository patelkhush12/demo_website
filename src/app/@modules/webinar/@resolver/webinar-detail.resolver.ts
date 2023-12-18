import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WebinarService } from '../@service/webinar.service';

@Injectable({
  providedIn: 'root'
})
export class WebinarDetailResolver implements Resolve<boolean> {
  constructor(
    private _webinarService: WebinarService,
    private _router: Router,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    let queryParams = {
      ...route.queryParams,
      page_size: 6
    };

    return forkJoin({
      detail: this._webinarService.getSingleWebinar(route.params.slug),
      category: this._webinarService.getWebinarCategories(),
      recent: this._webinarService.getRecentWebinar(),
      comments: this._webinarService.getSingleWebinarComment(route.params['slug'], { page_size: 5 }),
    }).pipe(
      catchError((error) => {
        this._router.navigate(['/404']);
        return of(null);
      })
    ) as any;
  }
}

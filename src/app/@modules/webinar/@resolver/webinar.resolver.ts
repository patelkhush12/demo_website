import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { WebinarService } from '../@service/webinar.service';

@Injectable({
  providedIn: 'root'
})
export class WebinarResolver implements Resolve<boolean> {
  constructor(private _webinarService: WebinarService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    const page_size = 2;
    let queryParams = {
      ...route.queryParams,
      page_size: page_size
    }

    return forkJoin({
      list: this._webinarService.getAllWebinar(queryParams),
      category: this._webinarService.getWebinarCategories(),
      recent: this._webinarService.getRecentWebinar(),
      page_size: of(page_size)
    }) as any;
  }
}

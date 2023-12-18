import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { MediaCoverageService } from '../@service/media-coverage.service';

@Injectable({
  providedIn: 'root'
})
export class MediaCoverageResolver implements Resolve<boolean> {
  constructor(private _mediaCoverageService: MediaCoverageService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    const page_size = 2;
    let queryParams = {
      ...route.queryParams,
      page_size: page_size
    }

    return forkJoin({
      list: this._mediaCoverageService.getAllMediaCoverage(queryParams),
      category: this._mediaCoverageService.getMediaCoverageCategories(),
      recent: this._mediaCoverageService.getRecentMediaCoverage(),
      page_size: of(page_size)
    }) as any;
  }
}

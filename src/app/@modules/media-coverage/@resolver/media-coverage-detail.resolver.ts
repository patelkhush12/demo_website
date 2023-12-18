import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MediaCoverageService } from '../@service/media-coverage.service';

@Injectable({
  providedIn: 'root'
})
export class MediaCoverageDetailResolver implements Resolve<boolean> {
  constructor(
    private _mediaCoverageService: MediaCoverageService,
    private _router: Router,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {


    return forkJoin({
      detail: this._mediaCoverageService.getSingleMediaCOverage(route.params.slug),
      category: this._mediaCoverageService.getMediaCoverageCategories(),
      recent: this._mediaCoverageService.getRecentMediaCoverage(),
      comments: this._mediaCoverageService.getSingleMediaCoverageComment(route.params['slug'], { page_size: 5 }),
    }).pipe(
      catchError((error) => {
        this._router.navigate(['/404']);
        return of(null);
      })
    ) as any;
  }
}

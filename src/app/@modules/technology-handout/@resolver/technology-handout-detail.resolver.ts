import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TechnologyHandoutService } from '../@service/technology-handout.service';

@Injectable({
  providedIn: 'root'
})
export class TechnologyHandoutDetailResolver implements Resolve<boolean> {
  constructor(
    private _technologyHandoutService: TechnologyHandoutService,
    private _router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return forkJoin({
      detail: this._technologyHandoutService.getSingleTechnologyHandout(route.params['slug']),
      category: this._technologyHandoutService.getTechnologyHandoutCategories(),
      recent: this._technologyHandoutService.getRecentTechnologyHandout(),
      comments: this._technologyHandoutService.getSingleCaseStudyComment(route.params['slug'], { page_size: 5 }),
    }).pipe(
      catchError((error) => {
        this._router.navigate(['/404']);
        return of(null);
      })
    ) as any;
  }
}

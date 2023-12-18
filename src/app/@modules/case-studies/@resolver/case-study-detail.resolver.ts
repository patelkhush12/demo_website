import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CaseStudyService } from '../@service/case-study.service';

@Injectable({
  providedIn: 'root'
})
export class CaseStudyDetailResolver implements Resolve<boolean> {

  constructor(private _caseStudyService: CaseStudyService,private _router:Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return forkJoin({
      detail: this._caseStudyService.getSingleCaseStudy(route.params['slug']),
      category: this._caseStudyService.getCaseStudyCategories(),
      recent: this._caseStudyService.getRecentCaseStudy(),
      comments: this._caseStudyService.getSingleCaseStudyComment(route.params['slug'], { page_size: 5 }),
    }).pipe(
      catchError((error) => {
        this._router.navigate(['/404']);
        return of(null);
      })
    ) as any;
  }
}

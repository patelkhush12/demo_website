import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { CaseStudyService } from '../@service/case-study.service';

@Injectable({
  providedIn: 'root'
})
export class CaseStudyResolver implements Resolve<boolean> {

  constructor(private _caseStudyService: CaseStudyService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    const page_size = 3;
    let queryParams = {
      ...route.queryParams,
      page_size: page_size
    }

    return forkJoin({
      list: this._caseStudyService.getAllCaseStudy(queryParams),
      recent: this._caseStudyService.getRecentCaseStudy(),
      categories: this._caseStudyService.getCaseStudyCategories(),
      page_size: of(page_size)
    }) as any;
  }

}

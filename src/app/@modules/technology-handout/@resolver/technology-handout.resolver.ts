import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { TechnologyHandoutService } from '../@service/technology-handout.service';

@Injectable({
  providedIn: 'root'
})
export class TechnologyHandoutResolver implements Resolve<boolean> {
  constructor(private _technologyHandoutService: TechnologyHandoutService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const page_size = 4;
    let apiParams = {
      ...route.queryParams,
      page_size: page_size
    }

    return forkJoin({
      list: this._technologyHandoutService.getAllTechnologyHandout(apiParams),
      category: this._technologyHandoutService.getTechnologyHandoutCategories(),
      recent: this._technologyHandoutService.getRecentTechnologyHandout(),
      page_size: of(page_size)
    }) as any;
  }
}

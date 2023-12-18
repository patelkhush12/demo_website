import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { TechnologyCatalogService } from '../@service/technology-catalog.service';

@Injectable({
  providedIn: 'root'
})
export class TechnologyCatalogResolver implements Resolve<boolean> {

  constructor(private _technologyCatalogService: TechnologyCatalogService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const page_size = 6;
    let apiParams = {
      ...route.queryParams,
      page_size: page_size
    }
    return this._technologyCatalogService.getAllTechCatalog(apiParams);
  }
}

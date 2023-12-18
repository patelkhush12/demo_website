import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { CareerService } from '../@service/career.service';

@Injectable({
  providedIn: 'root'
})
export class CareerResolver implements Resolve<boolean> {
  constructor(
    private _careerService: CareerService,
    // private _galleryService: GalleryService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const page_size = 4;
    let queryParams = {
      ...route.queryParams,
      page_size: page_size
    };
    return forkJoin({
      career: this._careerService.getAllCareer(queryParams),
      gallery: this._careerService.getAllGallery(),
      page_size: of(page_size)
    }) as any;
  }
}

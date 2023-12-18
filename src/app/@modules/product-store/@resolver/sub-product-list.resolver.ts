import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubProductListResolver implements Resolve<any> {


  constructor(
    private _http: HttpClient,
    private _router: Router,
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const page_size = 6;
    let apiParams = {
      ...route.queryParams,
      page_size: page_size,
    } as any

    let category_slug = route.queryParamMap.get('category') ?? '';
    if (category_slug.length > 0) {
      apiParams["categories__slug"] = category_slug
    }
    var changelang = localStorage.getItem('language')
    changelang == 'IN' ? changelang = 'EN' : changelang;
    let slug = route.paramMap.get('slug');
    return forkJoin({
      list: this._http.get(environment.apiUrl + '/product/public_product/' + slug + '/sub_products/', { params: apiParams } as any),
      category: this._http.get(`${environment.apiUrl}/product/private_product/${slug}/sub_product_categories_dropdown/?lang=` + changelang),
      page_size: of(page_size)
    }).pipe(
      catchError((error) => {
        this._router.navigate(['/404']);
        return of(null);
      })
    ) as any;
  }
}

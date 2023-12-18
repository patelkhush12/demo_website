import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { BlogService } from '../@service/blog.service';

@Injectable({
  providedIn: 'root'
})
export class BlogResolver implements Resolve<boolean> {

  constructor(private _blogService: BlogService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const page_size = 6;
    let apiParams = {
      ...route.queryParams,
      page_size:page_size
    }
    return forkJoin({
      list: this._blogService.getAllBlog(apiParams),
      category: this._blogService.getBlogCategories(),
      recent: this._blogService.getRecentBlog(),
      page_size:of(page_size)
    }) as any;
  }
}

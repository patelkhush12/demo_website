import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BlogService } from '../@service/blog.service';

@Injectable({
  providedIn: 'root'
})
export class BlogDetailResolver implements Resolve<boolean> {
  constructor(
    private _blogService: BlogService,
    private _router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return forkJoin({
      detail: this._blogService.getSingleBlog(route.params['slug']),
      category: this._blogService.getBlogCategories(),
      recent: this._blogService.getRecentBlog(),
      comments: this._blogService.getSingleBlogComment(route.params['slug'], { page_size: 5 }),
    }).pipe(
      catchError((error) => {
        this._router.navigate(['/404']);
        return of(null);
      })
    ) as any;
  }
}

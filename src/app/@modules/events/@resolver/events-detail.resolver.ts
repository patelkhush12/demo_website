import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EventsService } from '../@service/events.service';

@Injectable({
  providedIn: 'root'
})
export class EventsDetailResolver implements Resolve<boolean> {
  constructor(
    private _eventsService: EventsService,
    private _router: Router,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return forkJoin({
      detail: this._eventsService.getSingleEvents(route.params.slug),
      category: this._eventsService.getEventCategories(),
      recent: this._eventsService.getRecentEvents(),
      comments: this._eventsService.getEventsComment(route.params['slug'], { page_size: 5 }),
    }).pipe(
      catchError((error) => {
        this._router.navigate(['/404']);
        return of(null);
      })
    ) as any;
  }
}

import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { EventsService } from '../@service/events.service';

@Injectable({
  providedIn: 'root'
})
export class EventsResolver implements Resolve<boolean> {
  constructor(private _eventsService: EventsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const page_size = 4;
    let apiParams = {
      ...route.queryParams,
      page_size: page_size
    }

    return forkJoin({
      list: this._eventsService.getAllEvents(apiParams),
      category: this._eventsService.getEventCategories(),
      recent: this._eventsService.getRecentEvents(),
      page_size: of(page_size)
    }) as any;
  }
}

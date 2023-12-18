import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { ClientsService } from '../@service/clients.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsResolver implements Resolve<boolean> {
  constructor(
    private _clientsService: ClientsService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const page_size = 6;
    let apiParams = {
      ...route.queryParams,
      page_size: page_size
    }
    let apiParams1 = {
      ...route.queryParams,
      page_size: page_size
    }

    return forkJoin({

      testimonialList: this._clientsService.getAllTestimonials(apiParams),
      industryList: this._clientsService.getAllIndustries(),
      partnerList: this._clientsService.getAllpartner(apiParams1),
      page_size: of(page_size)
    }) as any;
  }
}

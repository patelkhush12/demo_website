import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ServiceApiResponse, ServiceApiService } from '../@services/service-api.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesResolver implements Resolve<ServiceApiResponse> {
  constructor(private _serviceApiService: ServiceApiService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this._serviceApiService.getAllService({});
  }
}

import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ContainerApiResponse, ContainerApiContainer } from '../@services/contanier-api.service';

@Injectable({
  providedIn: 'root'
})
export class ContainerResolver implements Resolve<ContainerApiResponse> {
  constructor(private _containerApiContainer: ContainerApiContainer) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this._containerApiContainer.getAllcontainer();
  }
}

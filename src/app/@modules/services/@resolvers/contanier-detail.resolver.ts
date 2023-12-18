import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ContainerApiContainer, SingleContainerApiResponse } from '../@services/contanier-api.service';

@Injectable({
  providedIn: 'root'
})
export class ContainerDetailResolver implements Resolve<SingleContainerApiResponse> {
  constructor(
    private _containerApiContainer: ContainerApiContainer,
    private _router: Router,
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const slug = route.params['id'];
    return this._containerApiContainer.getSingleContainer(slug).pipe(
      catchError((error) => {
        this._router.navigate(['/404']);
        return of(null);
      })
    );;
  }
}

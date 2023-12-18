import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ContantApiContant, Singlecontact_ApiResponse } from '../@service/contactus-api.service';

@Injectable({
    providedIn: 'root'
})
export class ContainerDetailResolver implements Resolve<Singlecontact_ApiResponse> {
    constructor(
        private _ContantApiContant: ContantApiContant,
        private _router: Router,
    ) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const slug = route.params['id'];
        return this._ContantApiContant.getSingleContact(slug).pipe(
            catchError((error) => {
                this._router.navigate(['/404']);
                return of(null);
            })
        );;
    }
}

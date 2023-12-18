import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { contactApiResponse, ContantApiContant } from '../@service/contactus-api.service';

@Injectable({
    providedIn: 'root'
})
export class ContantResolver implements Resolve<contactApiResponse> {
    constructor(private _ContantApiContant: ContantApiContant) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this._ContantApiContant.getAllcontact();
    }
}

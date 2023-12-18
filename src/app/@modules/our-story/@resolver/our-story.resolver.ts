import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { TeamService } from '../../team/@service/team.service';

@Injectable({
  providedIn: 'root'
})
export class OurStoryResolver implements Resolve<boolean> {
  constructor(
    private _teamService:TeamService
  ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return forkJoin({
      gallery: this._teamService.getAllGallery()
    })
  }
}

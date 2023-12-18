import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { TeamService } from '../@service/team.service';

@Injectable({
  providedIn: 'root'
})
export class TeamResolver implements Resolve<boolean> {
  constructor(
    private _teamService: TeamService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    // let queryParams = {
    //   ...route.queryParams,
    //   page_size: 6
    // };


    return forkJoin({
      team: this._teamService.getAllTeam(),
      gallery: this._teamService.getAllGallery()
    })
  }
}

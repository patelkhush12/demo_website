import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BasePathService {

  private _basePath: string = '';

  get basePath(): string {
    return this._basePath;
  }

  set basePath(value: string) {
    this._basePath = value;
  }

  constructor(private router: Router) {
    this.updateBasePathFromLocalStorage();
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.updateBasePathFromLocalStorage();
      }
    });
  }

  private updateBasePathFromLocalStorage(): void {
    this.basePath = 'LN/' + localStorage.getItem('language');
  }
}

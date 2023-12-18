import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface NavSetting {
  navTextModeIsWhite: boolean;
  selectedBgColor: string;
  navColorClass: string;
  navBgClass: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavbarSettingsService {

  constructor() { }

  _navBarSetting = new BehaviorSubject<NavSetting>({
    navTextModeIsWhite: true,
    selectedBgColor: 'c100',
    navColorClass: '',
    navBgClass: 'c-white',
  });

  public navBarSetting$ = this._navBarSetting.asObservable();

  public update(newData: Partial<NavSetting>) {
    let existingData = this._navBarSetting.value;
   
    this._navBarSetting.next({
      ...existingData,
      ...newData,
    });
  }

}
// navBgClass: "color-c0"
// navColorClass: ""
// navTextModeIsWhite: false
// selectedBgColor: "c0"
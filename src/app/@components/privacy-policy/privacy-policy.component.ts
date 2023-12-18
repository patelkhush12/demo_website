import { Component, OnInit } from '@angular/core';
import * as sidebarlabel from '../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../assets/i18n/jp.json';
@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  msglabel: any;
  localstoragelanguage: any;
  constructor() { }

  ngOnInit(): void {
    this.localstoragelanguage = localStorage.getItem('language');

    if (this.localstoragelanguage == "EN") {
      // console.log(this.msglabel);

      this.msglabel = sidebarlabel

    } else if (this.localstoragelanguage == "IN") {
      this.msglabel = sidebarlabel

    } else {
      this.msglabel = sidebarlabel1
    }
  }

}

import { Component, Input, OnInit } from '@angular/core';
import * as message1 from './../../../../../assets/i18n/jp.json';
import * as sidebarlabel from '../../../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../../../assets/i18n/jp.json';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  // ShowMe:boolean=false;
  msglabel: any;
  localstoragelanguage: any;
  constructor() { }

  ngOnInit(): void {
    // console.log(message1)
    this.localstoragelanguage = localStorage.getItem('language');
    // const abc = localStorage.getItem('language');
    // console.log(this.localstoragelanguage
    // );

    if (this.localstoragelanguage == "EN") {
      // console.log(this.msglabel);

      this.msglabel = sidebarlabel

    } else if (this.localstoragelanguage == 'IN') {
      this.msglabel = sidebarlabel

    }
    else {
      this.msglabel = sidebarlabel1
    }
  }

  @Input() clients: any[] = [];
  toogle() {
    // this.ShowMe=!this.ShowMe;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import * as sidebarlabel from '../../../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../../../assets/i18n/jp.json';

@Component({
  selector: 'app-sidebar-recent',
  templateUrl: './sidebar-recent.component.html',
  styleUrls: ['./sidebar-recent.component.scss']
})
export class SidebarRecentComponent implements OnInit {
  msglabel: any;
  localstoragelanguage: any;
  constructor() { }

  ngOnInit(): void {
    this.localstoragelanguage = localStorage.getItem('language');
    // const abc = localStorage.getItem('language');
    // console.log(this.localstoragelanguage
    // );

    if (this.localstoragelanguage == "EN") {
      // console.log(this.msglabel);

      this.msglabel = sidebarlabel

    } else if (this.localstoragelanguage == "IN") {
      this.msglabel = sidebarlabel

    }
    else {
      this.msglabel = sidebarlabel1
    }
  }

  @Input()
  recentItem: any = [];

  @Input()
  label = 'Recent';

  @Input()
  route = './';

  blogDefaultImage = 'assets/img/photos/blog-bg.jpg'

}

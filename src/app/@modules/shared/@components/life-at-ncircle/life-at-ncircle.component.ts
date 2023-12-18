import { Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types/swiper-options';
import * as sidebarlabel from '../../../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../../../assets/i18n/jp.json';

@Component({
  selector: 'app-life-at-ncircle',
  templateUrl: './life-at-ncircle.component.html',
  styleUrls: ['./life-at-ncircle.component.scss']
})
export class LifeAtNcircleComponent implements OnInit {
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

    } else {
      this.msglabel = sidebarlabel1
    }
  }

  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    navigation: false,
    pagination: true,
    // autoHeight:true
  };


  @Input()
  gallery: any[] = []
}

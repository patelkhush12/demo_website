import { Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { Location } from '@angular/common';


export interface Slider {
  id: number;
  title: string;
  subtitle: string;
  button_label: string;
  button_link: string;
  bg_image: string;
  position: number;
}

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {


  constructor(private location: Location) { }

  ngOnInit(): void {
    // this.location.onUrlChange((url: string) => {
    //   // Check if the user is navigating back to the same page
    //   // if (url === this.location.path()) {
    //   //   // Navigate to the current URL again
    //   //   this.location.replaceState(url);
    //   // }
    // });
  }

  @Input()
  slider: Slider[] = [
  ]

  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    navigation: false,
    pagination: true,
    speed: 600,
    autoplay: true,
    loop: true,
    effect: 'fade'
  };
  // redirectLink(link: any) {
  //   window.location.href = link;
  // }
  redirectLink(link: any) {
    window.open(link, '_blank'); // Open link in a new tab/window
  }
  goBack() {
    this.location.back(); // Go back to the previous page
    this.config;
  }
}

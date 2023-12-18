
import { Component, HostListener, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { NavbarSettingsService } from 'src/app/navbar-settings.service';
import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';


export interface Header { }

export interface Product_store {
  title: string;
  slug: string;
  sub_product: any[];
  url: string;
}

export interface Service {
  title: string;
  slug: string;
}

export interface Footer {
  product_stores: Product_store[];
  services: Service[];
}

export interface WrapperAPIRes {
  header: Header;
  footer: Footer;
}
@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    private _navbarSettingsService: NavbarSettingsService,
    private router: Router,
    private _activatedRoute: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef // Add this line

  ) {

  }

  navBarSetting$ = this._navbarSettingsService.navBarSetting$.pipe(
    tap(data => {
      if (isPlatformBrowser(this.platformId)) {

        const body = document.querySelector('body');
        body?.classList.forEach(className => {

          if (className.startsWith('color-')) {
            this.renderer.removeClass(body, className);
          }
        })
        this.renderer.addClass(body, `color-${data.selectedBgColor}`);
      }
    })
  )

  // wrapperData!: WrapperAPIRes;
  wrapperData$ = this._activatedRoute.data.pipe(
    map(data => {
      // this.wrapperData = data.apiData;
      return data.apiData
    }),
  )

  ngOnInit(): void {
    !localStorage.getItem("language") && localStorage.setItem("language", "IN")
    // console.log(localStorage.getItem("language"));
    const currentURL = window.location.href;
    console.log(currentURL);
    const url = new URL(currentURL);
    const pathName = url.pathname; // This will give you "/EN/blogs/kja"

    // Split the path name by '/' to get individual parts
    const pathParts = pathName.split('/');

    // The value you want is likely at index 1 (assuming the path structure is consistent)
    const language = pathParts[1]; // This will give you "EN"
    if (language == "JP" || language == "EN") {
      console.log("jDJ", language);
      localStorage.setItem('language', language)

    } // Outputs "EN"
  }

  showLayoutNavBarAndFooter = false;
  onActivate($event: any) {
    this.showLayoutNavBarAndFooter = !["/landingpage/template1", "/landingpage/template2", "/landingpage/template3", "/landingpage/template4", "/landingpage/template5", "/landingpage/template6"].includes(this.router.url)

    if (this.router.url == '/') {
      this._navbarSettingsService.update({
        navTextModeIsWhite: true,
        selectedBgColor: "c100",
        navColorClass: "text-color-white",
        navBgClass: "color-c100",
      });
    } else {
      this._navbarSettingsService.update({
        navTextModeIsWhite: false,
        selectedBgColor: 'c0',
        navColorClass: '',
        navBgClass: 'color-c0',
      });
    }

    // Trigger change detection
    this.cdr.detectChanges();
  }

}
// navTextModeIsWhite: true,
// selectedBgColor: 'c100',
// navColorClass: '',
// navBgClass: 'c-white',
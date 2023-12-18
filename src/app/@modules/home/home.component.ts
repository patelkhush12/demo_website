import { Component, HostListener, OnInit, Renderer2, PLATFORM_ID, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { fadeInOnEnterAnimation, fadeInUpBigOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { NavbarSettingsService, NavSetting } from 'src/app/navbar-settings.service';
import { Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../shared/@services/seo.service';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),

    fadeInUpBigOnEnterAnimation(),
  ]
})
export class HomeComponent implements OnInit {

  localstoragelanguage: any;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private renderer: Renderer2,
    private _navbarSettingsService: NavbarSettingsService,
    private _seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private spinner: NgxSpinnerService

  ) { }

  navSetting$ = this._navbarSettingsService.navBarSetting$;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
    this.localstoragelanguage = localStorage.getItem('language');
    if (this.localstoragelanguage == "EN") {
      this._seoService.setTitle("CAD & BIM Software Customization | Scan To BIM Services | Forge | Revit | nCircle Tech");
      this._seoService.updateMetaData({
        title: 'CAD & BIM Software Customization | Scan To BIM Services | Forge | Revit | nCircle Tech',
        description: 'Best BIM & CAD software development company serving globally. Our Machine Learning based Scan to BIM services unlocks efficiency and precision. ',
        image: `${environment.baseSiteUrl}/assets/img/sq-logo.png`,
        keywords: ''
      })
    } else if (this.localstoragelanguage == "IN") {
      this._seoService.setTitle("CAD & BIM Software Customization | Scan To BIM Services | Forge | Revit | nCircle Tech");
      this._seoService.updateMetaData({
        title: 'CAD & BIM Software Customization | Scan To BIM Services | Forge | Revit | nCircle Tech',
        description: 'Best BIM & CAD software development company serving globally. Our Machine Learning based Scan to BIM services unlocks efficiency and precision. ',
        image: `${environment.baseSiteUrl}/assets/img/sq-logo.png`,
        keywords: ''
      })
    }
    else {
      this._seoService.setTitle("CAD＆BIMソフトウェアのカスタマイズ、Scan to BIMサービス、Forge、Revitなど、nCircle Techが提供しています");
      this._seoService.updateMetaData({
        title: 'CAD＆BIMソフトウェアのカスタマイズ、Scan to BIMサービス、Forge、Revitなど、nCircle Techが提供しています',
        description: 'グローバルに展開する最高のBIMおよびCADソフトウェア開発会社。機械学習を活用したScan to BIMサービスで効率と精度を引き出します。',
        image: `${environment.baseSiteUrl}/assets/img/sq-logo.png`,
        keywords: ''
      })
    }
  }
  offsetFlag = true;

  apiData$ = this.activatedRoute.data.pipe(
    map(data => data.apiData)
  );

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {

      const body = document.querySelector('body');
      body?.classList.forEach(className => {
        if (className.startsWith('color-')) {
          this.renderer.removeClass(body, className);
        }
      })
      this.renderer.addClass(body, `color-c100`);
    }
  }
  // navTextModeIsWhite = true;
  // navColorClass !: string | null;
  // navBgClass: string | null = "c-white";


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {

      const body = document.querySelector('body');
      const scroll = document.documentElement.scrollTop + (document.documentElement.clientHeight / 3);
      const panels = document.querySelectorAll('.my-panel');


      if (window.scrollY < 200) {
        this._navbarSettingsService.update({
          navTextModeIsWhite: true,
          selectedBgColor: 'c100',
          navColorClass: '',
          navBgClass: 'c-white',
        });
      } else if (window.scrollY > 200 && window.scrollY < 900) {
        let whiteNavBar = {
          navBgClass: "color-c0",
          navColorClass: "",
          navTextModeIsWhite: false,
          selectedBgColor: "c0"
        };
        this._navbarSettingsService.update(whiteNavBar);
      } else if (window.scrollY > 900) {

        panels.forEach(panel => {

          let bodyRect = panel.getBoundingClientRect();
          let topOffset = bodyRect.top + window.scrollY;
          if (topOffset <= scroll && topOffset + bodyRect.height > scroll) {
            let selectedBgColor = panel.getAttribute('data-color');
            let selectedNos = panel.getAttribute('slide-nos');
            let newNavBarSetting: Partial<NavSetting> = {};
            if (selectedNos) {
              this.currentNos = selectedNos;
            }
            if (selectedBgColor) {
              newNavBarSetting["selectedBgColor"] = selectedBgColor;
            }
            // Mode Toggle
            if (selectedBgColor != "c0") {
              // this.navColorClass = "text-color-white";
              // this.navTextModeIsWhite = true;
              newNavBarSetting["navColorClass"] = "text-color-white";
              newNavBarSetting["navTextModeIsWhite"] = true;
            } else {
              // this.navColorClass = "";
              // this.navTextModeIsWhite = false;
              newNavBarSetting["navColorClass"] = "";
              newNavBarSetting["navTextModeIsWhite"] = false;
            }
            if (selectedBgColor) {
              newNavBarSetting["navBgClass"] = "color-" + selectedBgColor;
            }
            if (!body?.classList.contains(`color-${selectedBgColor}`)) {

              body?.classList.forEach(className => {

                if (className.startsWith('color-')) {
                  this.renderer.removeClass(body, className);
                }
              })

              this.renderer.addClass(body, `color-${selectedBgColor}`);
            }


            this._navbarSettingsService.update(newNavBarSetting);
          } // Scroll set check end

        }); // Panels foreach end
      }

    }
  }

  currentNos = "01";
  // selectedBgColor = "c100";

}

import { Component, HostListener, OnInit, Renderer2, PLATFORM_ID, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { NavbarSettingsService, NavSetting } from './navbar-settings.service';
import { isPlatformBrowser } from '@angular/common';
import { environment } from 'src/environments/environment';
declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    private _navbarSettingsService: NavbarSettingsService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,

  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.addGAScript();
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: any) => {
        /** START : Code to Track Page View  */
        gtag('event', 'page_view', {
          page_path: event.urlAfterRedirects
        })
        /** END */
      })
    }
  }

  addGAScript() {
    let gtagScript: HTMLScriptElement = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + environment.GA_TRACKING_ID;
    // document.head.prepend(gtagScript);
    document.head.insertBefore(gtagScript, document.head.firstChild);
    /** Disable automatic page view hit to fix duplicate page view count  **/
    gtag('config', environment.GA_TRACKING_ID, { send_page_view: false });

  }

  navBarSetting$ = this._navbarSettingsService.navBarSetting$.pipe(
    tap(data => {
      if (isPlatformBrowser(this.platformId)) {
        // Your client side code
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

  ngOnInit(): void { }

  showLayoutNavBarAndFooter = false;

  onActivate($event: any) {
    this.showLayoutNavBarAndFooter = true;
    
    if (this.router.url == '/') {
      this._navbarSettingsService.update(
        {
          navTextModeIsWhite: true,
          selectedBgColor: "c100",
          navColorClass: "text-color-white",
          navBgClass: "color-c100",
        }
      );
    } else {
      this._navbarSettingsService.update({
        navTextModeIsWhite: false,
        selectedBgColor: 'c0',
        navColorClass: '',
        navBgClass: 'color-c0',
      });
    }

  }
}
// navTextModeIsWhite: true,
// selectedBgColor: 'c100',
// navColorClass: '',
// navBgClass: 'c-white',
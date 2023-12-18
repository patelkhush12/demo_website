import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { interval, Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SeoService } from '../../shared/@services/seo.service';
import { WebinarService } from '../@service/webinar.service';
import * as sidebarlabel from '../../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../../assets/i18n/jp.json';
@Component({
  selector: 'app-webinar-detail',
  templateUrl: './webinar-detail.component.html',
  styleUrls: ['./webinar-detail.component.scss']
})
export class WebinarDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('para') para!: ElementRef;
  localstoragelanguage: any;
  msglabel: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _webinarService: WebinarService,
    private _title: Title,
    private _seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }
  ngAfterViewInit(): void {
    // var len = document.getElementsByClassName('ql-align-right').length
    // for(let i=0;i<len;i++){
    const elm = document.querySelectorAll<HTMLElement>('.ql-align-right')!;
    for (let i = 0; i < elm.length; i++) {

      elm[i].style.textAlign = 'right';
    }

    const elm1 = document.querySelectorAll<HTMLElement>('.ql-align-left')!;
    for (let i = 0; i < elm1.length; i++) {
      elm1[i].style.textAlign = 'left';
    }
    const elm2 = document.querySelectorAll<HTMLElement>('.ql-align-center')!;
    for (let i = 0; i < elm2.length; i++) {
      elm2[i].style.textAlign = 'center';
    }
    for (let i = 0; i < this.para.nativeElement.getElementsByTagName('a').length; i++) {
      this.para.nativeElement.getElementsByTagName('a')[i].style.color = "blue"
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      this.subscription?.unsubscribe();
    }
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

  apiData$: Observable<any> = this._activatedRoute.data.pipe(
    map(data => {
      const detail = data.apiData.detail;
      this._title.setTitle(`${detail.seo_title}`);
      this._seoService.updateMetaData(
        {
          title: detail.seo_title,
          description: detail.seo_description,
          // image: detail.image,
          keywords: detail.seo_keywords,
          // authors: detail.authors.map((au: any) => au.name).join(",")
          image: ''
        }
      );
      this.ngOnInit();
      return data.apiData
    }),
    tap(data => {
      if (isPlatformBrowser(this.platformId)) {
        this.subscription = interval(1000).subscribe((x: any) => {
          this.timeLeft = this._webinarService.getTimeDifference(new Date(data['detail']['webinar_date']));
        });
      }
    }
    )

  );

  subscription!: Subscription;

  dDay = new Date();

  timeLeft = {
    secondsToDday: -1,
    minutesToDday: 0,
    hoursToDday: 0,
    daysToDday: 0,
  }

  // ngOnInit() {
  //   this.subscription = interval(1000)
  //     .subscribe((x: any) => {
  //       this.timeLeft = this._webinarService.getTimeDifference(this.dDay);
  //     });
  // }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.subscription?.unsubscribe();
    }
  }
}

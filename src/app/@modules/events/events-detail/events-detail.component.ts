import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SeoService } from '../../shared/@services/seo.service';
import * as sidebarlabel from '../../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../../assets/i18n/jp.json';

@Component({
  selector: 'app-events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.scss']
})
export class EventsDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('para') para!: ElementRef;
  msglabel: any;
  localstoragelanguage: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _title: Title,
    private _seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scroll({ top: 0, behavior: 'smooth' });
    }
    this.localstoragelanguage = localStorage.getItem('language');
    // const abc = localStorage.getItem('language');
    console.log(this.localstoragelanguage
    );

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
  ngAfterViewInit() {
    for (let i = 0; i < this.para.nativeElement.getElementsByTagName('a').length; i++) {
      this.para.nativeElement.getElementsByTagName('a')[i].style.color = "blue"
    }
  }


  // apiData$: Observable<any> = this._activatedRoute.data.pipe(
  //   map(data => {
  //     this._title.setTitle(`${data.apiData.detail.title} | nCircle Tech`);
  //     return data.apiData
  //   }),
  // );

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
          image: ''

        }
      );
      return data.apiData
    }),
  );

}

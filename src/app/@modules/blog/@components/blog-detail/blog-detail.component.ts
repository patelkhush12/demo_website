import { Component, Inject, OnInit, PLATFORM_ID, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from 'src/app/@modules/shared/@services/seo.service';
import * as sidebarlabel from '../../../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../../../assets/i18n/jp.json';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('para') para!: ElementRef;
  msglabel: any;
  localstoragelanguage: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _title: Title,
    private _seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object,

  ) {

  }

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
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  apiData$: Observable<any> = this._activatedRoute.data.pipe(
    map(data => {
      if (isPlatformBrowser(this.platformId)) {
        window.scroll({ top: 0, behavior: 'smooth' });
      }
      const detail = data.apiData.detail;
      this._title.setTitle(`${detail.seo_title}`);
      this._seoService.updateMetaData(
        {
          title: detail.seo_title,
          description: detail.seo_description,
          // image: detail.image,
          keywords: detail.seo_keywords,
          authors: detail.authors.map((au: any) => au.name).join(","),
          image: ''

        }
      );
      return data.apiData

    }),
  );

  blogDefaultImage = 'assets/img/photos/blog-bg.jpg'
}

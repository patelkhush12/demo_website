import { Component, OnInit, ViewChild, ViewContainerRef, PLATFORM_ID, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { SeoService } from '../shared/@services/seo.service';
import { isPlatformBrowser } from '@angular/common';
import { TeamService } from './@service/team.service';
import { response } from 'express';
import * as sidebarlabel from '../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../assets/i18n/jp.json';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  msglabel: any;
  localstoragelanguage: any;

  @ViewChild('componentWrapper', { static: true, read: ViewContainerRef })
  componentWrapper!: ViewContainerRef;
  componentRef: any;
  bannerData: any;
  seodata: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private _teamService: TeamService,
    private _title: Title,

  ) { }

  ngOnInit() {
    this.getBannerData();
    // this.getseodata();
    if (isPlatformBrowser(this.platformId)) {
      window.scroll({ top: 0, behavior: 'smooth' });
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
    if (this.localstoragelanguage == "EN") {
      this._seoService.setTitle("Uniting Expertise and Innovation with nfinite Possibilities");
      this._seoService.updateMetaData({
        title: 'Uniting Expertise and Innovation with nfinite Possibilities',
        description: 'Team nCircle Tech has a cluster of best CAD, CAM, BIM & Revit developers across the globe. Explore our remarkable team today.',
        image: '',
        keywords: ''
      })
    } else if (this.localstoragelanguage == "IN") {
      this._seoService.setTitle("Uniting Expertise and Innovation with nfinite Possibilities");
      this._seoService.updateMetaData({
        title: 'Uniting Expertise and Innovation with nfinite Possibilities',
        description: 'Team nCircle Tech has a cluster of best CAD, CAM, BIM & Revit developers across the globe. Explore our remarkable team today.',
        image: '',
        keywords: ''
      })
    }
    else {
      this._seoService.setTitle("nfiniteの可能性とともに、専門知識と革新を結集します。");
      this._seoService.updateMetaData({
        title: 'nfiniteの可能性とともに、専門知識と革新を結集します。',
        description: 'nCircle Techのチームには、世界中に広がる優れたCAD、CAM、BIM、およびRevitの開発者が集まっています。今日、当社の素晴らしいチームをご覧ください。',
        image: '',
        keywords: ''
      })
    }
  }

  apiData$: Observable<any> = this._activatedRoute.data.pipe(
    map(data => data.teamData
    )
  );

  selectedLeader: any;

  getBannerData() {
    this._teamService.getBannerData().subscribe(response => {
      this.bannerData = response;
    });
  }
  getseodata() {
    this._teamService.getseodata().subscribe(response => {
      this.seodata = response
      const detail = this.seodata
      this._title.setTitle(`${detail.seo_title}`);
      console.log(detail.seo_title);

      this._seoService.updateMetaData(
        {
          title: detail.seo_title,
          description: detail.seo_description,
          keywords: detail.seo_keywords,
          image: '',

        }
      );

    })
  }
}

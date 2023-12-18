import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SeoService } from '../shared/@services/seo.service';
import { EventsService } from './@service/events.service';
import { response } from 'express';
import * as sidebarlabel from '../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../assets/i18n/jp.json';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  seo_keyword = ""
  seo_title = ""
  seo_description = ""
  bannerData: any;
  seodata: any;
  msglabel: any;
  localstoragelanguage: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _eventsService: EventsService,
    private _seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private _title: Title,
    public meta: Meta,

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
      this._seoService.setTitle("Join Us for Unforgettable Moments - Explore Our Upcoming Events");
      this._seoService.updateMetaData({
        title: `Join Us for Unforgettable Moments - Explore Our Upcoming Events`,
        description: 'Immerse yourself in a world of inspiration and connection. Check out our exciting lineup of upcoming events that promise to spark creativity, & foster learning.',
        image: '',
        keywords: ''
      })
    } else if (this.localstoragelanguage == "IN") {
      this._seoService.setTitle("Join Us for Unforgettable Moments - Explore Our Upcoming Events");
      this._seoService.updateMetaData({
        title: `Join Us for Unforgettable Moments - Explore Our Upcoming Events`,
        description: 'Immerse yourself in a world of inspiration and connection. Check out our exciting lineup of upcoming events that promise to spark creativity, & foster learning.',
        image: '',
        keywords: ''
      })
    }
    else {
      this._seoService.setTitle("忘れられない瞬間を共に - 弊社の今後のイベントをご覧ください");
      this._seoService.updateMetaData({
        title: `忘れられない瞬間を共に - 弊社の今後のイベントをご覧ください`,
        description: 'インスピレーションとつながりの世界に没頭してください。創造性を刺激し学びを促進する、ワクワクする予定のイベントラインアップをご覧ください。',
        image: '',
        keywords: ''
      })
    }
  }

  // apiData$: Observable<any> = this._activatedRoute.data.pipe(
  //   map(data => data.EventsData),
  // );

  eventListData: any;

  apiData$: Observable<any> = this._activatedRoute.data.pipe(
    map(data => {
      this.eventListData = data.eventData.list;
      this.page_size = data.eventData.page_size;

      // const detail = this.eventListData.results;

      // this._title.setTitle(`Events | Explore What's Happening at nCircle`);
      // for (let i = 0; i < detail.length; i++) {


      //   if (this.seo_keyword.length == 0) {
      //     this.seo_keyword = this.seo_keyword + detail[i].seo_keywords

      //   } else {
      //     this.seo_keyword = this.seo_keyword + "," + detail[i].seo_keywords
      //   }
      //   if (this.seo_title.length == 0) {
      //     this.seo_title = this.seo_title + detail[i].seo_title

      //   } else {
      //     this.seo_title = this.seo_title + "," + detail[i].seo_title
      //   }

      //   if (this.seo_description.length == 0) {
      //     this.seo_description = this.seo_description + detail[i].seo_description

      //   } else {
      //     this.seo_description = this.seo_description + "," + detail[i].seo_description

      //   }


      // }

      // this._seoService.updateMetaData(
      //   {
      //     title: this.seo_title,
      //     description: this.seo_description,
      //     keywords: this.seo_keyword
      //   }
      // );

      return data.eventData
    }),
  );

  page = 1;
  page_size = 4;
  search = '';

  onPageChange(pageEvent: any) {
    if (pageEvent != this.page) {
      this.page = pageEvent;
      this._eventsService.getAllEvents({ page: this.page, page_size: this.page_size }).subscribe(next => {
        this.eventListData = next;
        window.scroll({ top: 0, behavior: 'smooth' });
      });
    }
  }

  onSearchChange(search: any) {
    if (search != this.search) {
      this.search = search;
      this._eventsService.getAllEvents({ page: this.page, page_size: this.page_size, search: search }).subscribe(next => {
        this.eventListData = next;
      })
    }
  }

  getBannerData() {
    this._eventsService.getBannerData().subscribe(response => {
      this.bannerData = response;

    });
  }
  getseodata() {
    this._eventsService.getseodata().subscribe(response => {
      this.seodata = response;
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
  getBlogLink(slug: string): any {
    var language = localStorage.getItem('language');

    // Check if the language is 'IN', if so, set it to 'EN' or another default language
    // if (language === 'IN') {
    //   language = ''; // Change it to your default language code
    //   // console.log(language);

    // }

    // console.log(slug)
    if (language == 'IN') {
      const url = `events/${slug}`;
      // console.log(url);

      window.open(url, '_blank');
    } else {
      const url = `/${language}/events/${slug}`;
      console.log(url);

      window.open(url, '_blank');

    }
    // Construct the URL based on the language and slug
    // return `/${language}/blogs/${slug}`;
    // this.router.navigate([`/${language}/blogs/${slug}`])


    // console.log(/${language}/blogs / ${ slug })
  }
}

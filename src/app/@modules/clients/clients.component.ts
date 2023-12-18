import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
// import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../shared/@services/seo.service';
import { ClientsService } from './@service/clients.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Title, Meta } from '@angular/platform-browser';
import * as sidebarlabel from '../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../assets/i18n/jp.json';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  msglabel: any;
  localstoragelanguage: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _seoService: SeoService,
    private _clientsService: ClientsService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private _http: HttpClient,
    private _title: Title,
    public meta: Meta,

  ) { }
  seodata: any;
  bannerData: any;

  ngOnInit() {
    this.getBannerData();
    // this.fecthPartnersData(/)
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
      this._seoService.setTitle("CAD | Machine Learning | BIM Plugins | AEC Software Development");
      this._seoService.updateMetaData({
        title: 'CAD | Machine Learning | BIM Plugins | AEC Software Development',
        description: 'nCircle Tech has provided effective machine learning services and suitable BIM plugins to varied clients matching their need aspect.',
        image: '',
        keywords: ''
      })
    } else if (this.localstoragelanguage == "IN") {
      this._seoService.setTitle("CAD | Machine Learning | BIM Plugins | AEC Software Development");
      this._seoService.updateMetaData({
        title: 'CAD | Machine Learning | BIM Plugins | AEC Software Development',
        description: 'nCircle Tech has provided effective machine learning services and suitable BIM plugins to varied clients matching their need aspect.',
        image: '',
        keywords: ''
      })
    } else {
      this._seoService.setTitle("CAD | マシンラーニング | BIMプラグイン | AECソフトウェア開発");
      this._seoService.updateMetaData({
        title: 'CAD | マシンラーニング | BIMプラグイン | AECソフトウェア開発',
        description: 'nCircle Techは、クライアントの多様なニーズに合わせて、効果的な機械学習サービスと適切なBIMプラグインを提供しています。',
        image: '',
        keywords: ''
      })
    }
    // this.getseodata();
  }

  // fecthPartnersData() {
  // PartnersInfo$ = this._http.get<any>(environment.apiUrl + '/client/partner_public/');

  // }

  // apiData$: Observable<any> = this._activatedRoute.data.pipe(
  //   map(data => data.clientsData)
  // );

  clientsData: any;
  partnerData: any
  apiData$: Observable<any> = this._activatedRoute.data.pipe(
    map(data => {

      this.clientsData = data.clientsData;
      this.page_size = data.clientsData.page_size;
      return data.clientsData
    }),
  );
  apiData1$: Observable<any> = this._activatedRoute.data.pipe(
    map(data => {

      this.partnerData = data.clientsData;

      this.page_size1 = data.clientsData.partnerList.page_size;
      // this.page_size = data.partnerData.partnerList;

      return data.clientsData
    }),
  );
  colorsArray = [
    "#E0E9FA",
    "#FAE6E7",
    "#FEF3E4",
    "#EAF3EF",
  ]

  page = 1;
  page_size = 6;
  search = '';
  page_size1 = 6

  onPageChange(pageEvent: any) {
    if (pageEvent != this.page) {
      this.page = pageEvent;
      this._clientsService.getAllTestimonials({ page: this.page, page_size: this.page_size }).subscribe(next => {
        this.clientsData.testimonialList = next;
      });
    }
  }
  onPageChange1(pageEvent: any) {

    if (pageEvent != this.page) {

      this.page = pageEvent;

      this._clientsService.getAllpartner({ page: this.page, page_size: this.page_size }).subscribe(next => {

        // this.PartnersInfo = next;
        this.partnerData.partnerList = next;
      });
    }
  }

  getBannerData() {
    this._clientsService.getBannerData().subscribe(response => {
      this.bannerData = response;

    });
  }
  getseodata() {
    this._clientsService.getseodata().subscribe(response => {
      console.log(response);

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
}



import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../shared/@services/seo.service';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContantApiContant, contactApiResponse } from './@service/contactus-api.service';
import { response } from 'express';
import * as sidebarlabel from '../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../assets/i18n/jp.json';



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  data: any;
  contactList: any = [];
  bannerData: any;
  seodata: any;
  msglabel: any;
  localstoragelanguage: any;
  shouldUseJapanese: any;

  constructor(
    private _activatedRoute: ActivatedRoute,

    private _fb: FormBuilder,
    private _http: HttpClient,
    private _seoService: SeoService,
    private _contactService: ContantApiContant,
    @Inject(PLATFORM_ID) private platformId: Object,
    private _title: Title,

  ) {
    // this.intial()
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

    } else {
      this.msglabel = sidebarlabel1
    }
    this.getBannerData();
    // this.getseodata();
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }



    // console.log(this.msglabel)
    if (this.localstoragelanguage == "EN") {
      this._seoService.setTitle("nCircleTech | Contact Us ");
      this._seoService.updateMetaData({
        title: `nCircleTech | Contact Us `,
        description: 'Have questions, ideas, or collaboration in mind? Our team is ready to assist you. Reach out through our contact details and lets start a conversation.',
        image: '/assets/img/photos/bg3.jpg',
        keywords: ''
      })
    } else if (this.localstoragelanguage == "IN") {
      this._seoService.setTitle("nCircleTech | Contact Us ");
      this._seoService.updateMetaData({
        title: `nCircleTech | Contact Us `,
        description: 'Have questions, ideas, or collaboration in mind? Our team is ready to assist you. Reach out through our contact details and lets start a conversation.',
        image: '/assets/img/photos/bg3.jpg',
        keywords: ''
      })
    }
    else {
      this._seoService.setTitle("nCircleTech | お問い合わせ");
      this._seoService.updateMetaData({
        title: `nCircleTech | お問い合わせ`,
        description: '質問、アイデア、または協力の考えがありますか？ 私たちのチームはあなたをサポートする準備ができています。お問い合わせやお話を始めるために、お問い合わせ先をご利用ください。',
        image: '/assets/img/photos/bg3.jpg',
        keywords: ''
      })
    }
  }
  selectedLanguage = localStorage.getItem('language');
  // console.log('Selected Language:', selectedLanguage);
  apiUrl = this.selectedLanguage === 'IN' ? 'EN' : this.selectedLanguage;

  contactCategory$ = this._http.get<any>(environment.apiUrl + '/contact_us/category/?lang=' + this.apiUrl);

  //   let selectedLanguage = localStorage.getItem('language');
  // const apiUrl = selectedLanguage === 'IN' ? 'EN' : selectedLanguage;
  // contactCategory1$ = this._http.get<any>(environment.apiUrl + '/contact_us/public_contact_details/?lang=' + apiUrl);
  // selectedLanguage = localStorage.getItem('language');
  // // console.log('Selected Language:', selectedLanguage);
  // apiUrl = this.selectedLanguage === 'IN' ? 'EN' : this.selectedLanguage;
  contactCategory1$ = this._http.get<any>(environment.apiUrl + '/contact_us/public_contact_details/?lang=' + this.apiUrl);

  formSubmitted = false;

  contactForm = this._fb.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}")]],
    mobile: ["", [Validators.required, Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')]],
    category: ["", [Validators.required]],
    company: ["", [Validators.required]],
    designation: ["", [Validators.required]],
    user_message: ["", [Validators.required]],
    recaptcha: ["", [Validators.required]],
    page_url: [""],

    // date:["", Validators.required],
    language: [localStorage.getItem('language') === 'IN' ? 'EN' : localStorage.getItem('language')]
  });

  saveContact() {
    this.formSubmitted = true;
    let url = window.location.href
    this.contactForm.controls.page_url.setValue(url)
    var changelang = localStorage.getItem('language')
    changelang == 'IN' ? changelang = 'EN' : changelang;

    let data = {
      ...this.contactForm.value,
      category: [this.contactForm.value["category"]],
    }
    if (changelang) {
      this._http.post(environment.apiUrl + '/contact_us/public_contact_us/?lang=' + changelang, data).subscribe(next => {

        if (localStorage.getItem('language') == 'EN' || localStorage.getItem('language') == 'IN') {
          Swal.fire('Thank you...', 'We will Contact you soon', 'success');

        } else {
          Swal.fire('ありがとう...', 'すぐにご連絡いたします', 'success');
        }
        this.contactForm.reset();
        this.formSubmitted = false;
      }, err => {
        if (localStorage.getItem('language') == 'EN' || localStorage.getItem('language') == 'IN') {

          Swal.fire('Server Issue...', 'Server Issue Please Contact us via our email', 'error');
          this.formSubmitted = false;
        } else {
          Swal.fire('サーバーの問題...', 'サーバーの問題メールでお問い合わせください', 'error');
          this.formSubmitted = false;
        }
      });
    }
  }
  // contact$: Observable<any> = this._activatedRoute.data.pipe(
  //   map(data => {


  //     const detail = data.contactList;

  //     return data.contactList

  //   }))




  // intial() {
  //   this.data.getAllcontact().subscribe({
  //     next: (res: any) => {

  //       this.contactList = res

  //     },
  //     error: () => {

  //       // alert('Error Happen')
  //     }
  //   })
  // }

  getBannerData() {
    this._contactService.getBannerData().subscribe(response => {
      this.bannerData = response;
    });
  }
  getDirection(address: any) {

    window.open('https://www.google.com/maps/dir/?api=1&destination=' + address + '&travelmode=driving', '_blank');

  }
  getseodata() {
    this._contactService.getseodata().subscribe(response => {
      this.seodata = response
      const detail = this.seodata
      this._title.setTitle(`${detail.seo_title}`);
      console.log(detail.seo_title);

      this._seoService.updateMetaData(
        {
          title: detail.seo_title,
          description: detail.seo_description,
          keywords: detail.seo_keywords,
          image: '/assets/img/photos/bg3.jpg',

        }
      );


    })
  }
}

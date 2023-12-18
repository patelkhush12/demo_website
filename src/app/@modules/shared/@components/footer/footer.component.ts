import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product_store, Service } from 'src/app/@components/wrapper/wrapper.component';
import { environment } from 'src/environments/environment';
import { SocialLinks } from '../../constants';
import Swal from 'sweetalert2';
import * as   sidebarlabel from '../../../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../../../assets/i18n/jp.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  msglabel: any;
  localstoragelanguage: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.localstoragelanguage = localStorage.getItem('language');
    // const abc = localStorage.getItem('language');
    // console.log(this.localstoragelanguage
    // );
    if (this.localstoragelanguage === 'EN' || this.localstoragelanguage === 'IN') {

    }


    if (this.localstoragelanguage == "EN") {

      this.msglabel = sidebarlabel
      // console.log(this.msglabel);

    } else if (this.localstoragelanguage == "IN") {
      this.msglabel = sidebarlabel

    }
    else {
      this.msglabel = sidebarlabel1
      // console.log(this.msglabel);

    }
  }

  currentYear = new Date().getFullYear();
  @Input()
  products: Product_store[] = [

  ]

  @Input()
  services: Service[] = [
  ]
  // services2 = [

  //   { name: "Machine Learning in CAD & BIM", link: '' },
  //   { name: "CAD & BIM Interoperability", link: '' },
  //   { name: "BIM Services", link: '' },
  // ]
  socialLinks = SocialLinks;
  // const storedLanguage = localStorage.getItem('language') || 'EN';
  subscribeForm = this._formBuilder.group({
    email: ["", Validators.required],
    recaptcha: [""],

    language: [localStorage.getItem('language') === 'IN' ? 'EN' : localStorage.getItem('language')]

  });
  joinFormSubmit = false;

  join() {

    this.joinFormSubmit = true;
    let data = this.subscribeForm.value;
    var changelang = localStorage.getItem('language')
    changelang == 'IN' ? changelang = 'EN' : changelang;
    if (changelang) {
      this._httpClient.post(environment.apiUrl + '/news_letter/public_news_subscriber/?lang=' + changelang, data)
        .subscribe(
          next => {
            //Todo Remove timeout
            setTimeout(() => {
              this.subscribeForm.reset();
              this.joinFormSubmit = false;
              if (localStorage.getItem('language') === 'EN' || localStorage.getItem('language') === 'IN') {
                Swal.fire('Thank you...', 'You have been successfully subscribed!', 'success');
              }
              else {
                Swal.fire('ありがとう...', '正常に購読されました!', 'success');
              }
            }, 2000)

          },
          err => {
            if (localStorage.getItem('language')) {
              let errorMsg = 'Server Issue Please Contact us via our email';
              if (err?.error?.email?.length > 0) {
                let tmpMsg = err?.error?.email[0]
                errorMsg = tmpMsg.charAt(0).toUpperCase() + tmpMsg.slice(1)
              }
              // this.subscribeForm.reset();
              // this.joinFormSubmit = false;
              Swal.fire('OOPS!', errorMsg, 'error');
            } else {
              let errorMsg = 'サーバーの問題メールでお問い合わせください';
              if (err?.error?.email?.length > 0) {
                let tmpMsg = err?.error?.email[0]
                errorMsg = tmpMsg.charAt(0).toUpperCase() + tmpMsg.slice(1)
              }
              // this.subscribeForm.reset();
              // this.joinFormSubmit = false;
              Swal.fire('おっとっと！', errorMsg, 'error');
            }
          }
        )
    } else {
      this._httpClient.post(environment.apiUrl + '/news_letter/public_news_subscriber/?lang=' + localStorage.getItem('language'), data)
        .subscribe(
          next => {
            //Todo Remove timeout
            setTimeout(() => {
              this.subscribeForm.reset();
              this.joinFormSubmit = false;
              if (localStorage.getItem('language') == 'EN') {
                Swal.fire('Thank you...', 'You have been successfully subscribed!', 'success');
              }
              else {
                Swal.fire('ありがとう...', '正常に購読されました!', 'success');
              }
            }, 2000)

          },
          err => {
            if (localStorage.getItem('language')) {
              let errorMsg = 'Server Issue Please Contact us via our email';
              if (err?.error?.email?.length > 0) {
                let tmpMsg = err?.error?.email[0]
                errorMsg = tmpMsg.charAt(0).toUpperCase() + tmpMsg.slice(1)
              }
              // this.subscribeForm.reset();
              // this.joinFormSubmit = false;
              Swal.fire('OOPS!', errorMsg, 'error');
            } else {
              let errorMsg = 'サーバーの問題メールでお問い合わせください';
              if (err?.error?.email?.length > 0) {
                let tmpMsg = err?.error?.email[0]
                errorMsg = tmpMsg.charAt(0).toUpperCase() + tmpMsg.slice(1)
              }
              // this.subscribeForm.reset();
              // this.joinFormSubmit = false;
              Swal.fire('おっとっと！', errorMsg, 'error');
            }
          }
        )
    }
  }

  ourstory: any = '私たちの物語';
  team: any = 'チーム';
  event: any = 'イベント';
  media: any = 'メディア報道';

  aboutUsEN = [
    { title: 'Our Story', routerLink: '/our-story' },
    { title: 'Team', routerLink: '/team' },
    { title: 'Events', routerLink: '/events' },
    { title: 'Media Coverage', routerLink: '/media-coverage' },
    // { title: 'Clients', routerLink: '/clients' },
    // { title: 'Career', routerLink: '/career' },
  ]


  aboutUsJP = [
    { title: this.ourstory, routerLink: '/our-story' },
    { title: this.team, routerLink: '/team' },
    { title: this.event, routerLink: '/events' },
    { title: this.media, routerLink: '/media-coverage' },
    // { title: 'Clients', routerLink: '/clients' },
    // { title: 'Career', routerLink: '/career' },
  ]

}

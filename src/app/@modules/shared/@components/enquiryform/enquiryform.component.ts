import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../../../shared/@services/seo.service';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
declare var $: any;
import * as sidebarlabel from '../../../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../../../assets/i18n/jp.json';


// import { ContantApiContant, contactApiResponse } from './@service/contactus-api.service';
import { response } from 'express';
import { log } from 'console';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-enquiryform',
  templateUrl: './enquiryform.component.html',
  styleUrls: ['./enquiryform.component.scss']
})
export class EnquiryformComponent implements OnInit {
  data: any;
  value!: boolean;
  visible = false;
  contactList: any = [];
  bannerData: any;
  seodata: any;
  resourceUrl: any;
  msglabel: any;
  localstoragelanguage: any;
  showButton: boolean = false;
  interval: any;
  disabled: boolean = true;
  modalOpened = false;
  modalAlreadyOpened = false;
  // viewchild('')
  @ViewChild('button')
  button!: ElementRef;
  constructor(
    private _activatedRoute: ActivatedRoute,

    private _fb: FormBuilder,
    private _http: HttpClient,
    private _seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private _title: Title,

  ) {
    // this.intial()
  }
  flag = true

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    this.localstoragelanguage = localStorage.getItem('language');
    // const abc = localStorage.getItem('language');


    if (this.localstoragelanguage == "EN") {
      // console.log(this.msglabel);

      this.msglabel = sidebarlabel

    } else if (this.localstoragelanguage == "IN") {
      this.msglabel = sidebarlabel

    }
    else {
      this.msglabel = sidebarlabel1
    }
    this.updateButtonVisibility();
    // Call the function when the component initializes
    // Set an interval to check the button visibility every 3 seconds (3000 milliseconds)
    if (this.flag && !this.modalOpened && !this.modalAlreadyOpened) {

      this.flag = false;
      this.modalOpened = true;
      // console.log("after", this.flag);
      this.interval = setInterval(() => {
        this.openmodal();
      }, 90000);
    } else {
      this.disabled
    }

    // this._seoService.setTitle("nCircle Tech | Let's Discuss on Digital Disruption");
    // this._seoService.updateMetaData({
    //   title: `nCircle Tech | Let's Discuss on Digital Disruption`,
    //   description: 'nCircle Tech looks forward to helping you with the onset of your software development journey and open infinite possibilities. Get in touch with us to discuss your dream project, career start or for other consultation. We provide high tech support to your businesses by the services like 3D Engineering software services, Machine Learning solutions, Data interoperability and many more such.',
    //   // image: '/assets/img/photos/bg3.jpg',
    //   keywords: ''
    // })
  }


  openmodal() {
    const openModelData = localStorage.getItem('openModel');
    if (!this.modalAlreadyOpened && this.button && openModelData == 'false') {
      localStorage.setItem("openModel", 'true');
      this.button.nativeElement.click();
      this.modalAlreadyOpened = true;
    }
    // document.getElementById("openModalButton").click();
  }
  updateButtonVisibility() {


    const currentTime = new Date();
    const desiredTime = new Date(); // Set your desired time here
    desiredTime.setHours(12);       // For example, 12:00 PM
    desiredTime.setMinutes(0);

    // Compare the current time with the desired time
    if (currentTime.getTime() >= desiredTime.getTime() && !this.showButton) {
      this.showButton = true;
    }
  }
  // ngOnDestroy() {
  //   console.log("djhcd");

  //   // Clear the interval when the component is destroyed to avoid memory leaks
  //   clearInterval(this.interval);
  // }

  onClick() {
    // Handle the button click event here.
    // console.log('Button clicked!');
  }
  selectedLanguage = localStorage.getItem('language');
  // console.log('Selected Language:', selectedLanguage);
  apiUrl = this.selectedLanguage === 'IN' ? 'EN' : this.selectedLanguage;

  contactCategory$ = this._http.get<any>(environment.apiUrl + '/contact_us/category/?lang=' + this.apiUrl);

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
    recaptcha: ["", Validators.required],
    page_url: [""],
    // language: [localStorage.getItem('language')]
    language: [localStorage.getItem('language') === 'IN' ? 'EN' : localStorage.getItem('language')]

    // date:["", Validators.required],
  });
  indexform = this._fb.group({
    email: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}")]],
    recaptcha: ["", [Validators.required]],

    language: [localStorage.getItem('language') === 'IN' ? 'EN' : localStorage.getItem('language')]

  })
  toogle() {

    this.visible = true
    // console.log("hsh", this.visible);

  }
  saveContact() {
    // console.log("zjndjn");

    var changelang = localStorage.getItem('language')
    changelang == 'IN' ? changelang = 'EN' : changelang;

    let url = window.location.href
    this.contactForm.controls.page_url.setValue(url)
    this.formSubmitted = true;
    var changelang = localStorage.getItem('language')
    changelang == 'IN' ? changelang = 'EN' : changelang;

    let data = {
      ...this.contactForm.value,
      category: [this.contactForm.value["category"]],
    }
    // console.log(data);
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
        }
        else {
          Swal.fire('サーバーの問題...', 'サーバーの問題メールでお問い合わせください', 'error');


        }

        this.formSubmitted = false;
      });
    }
  }
  saveemail() {
    this.formSubmitted = true;
    let data = {
      ...this.indexform.value,
      email: this.indexform.value["email"],
    }

    var changelang = localStorage.getItem('language')
    changelang == 'IN' ? changelang = 'EN' : changelang;
    if (changelang) {
      this._http.post(environment.apiUrl + '/news_letter/public_news_subscriber/?lang=' + changelang, data)
        .subscribe(
          next => {
            //Todo Remove timeout
            setTimeout(() => {
              // this.formSubmitted.reset();
              // this.joinFormSubmit = false;
              if (localStorage.getItem('language') == 'EN' || localStorage.getItem('language') == 'IN') {
                Swal.fire('Thank you...', 'You have been successfully subscribed!', 'success');
              }
              else {
                Swal.fire('ありがとう...', '正常に購読されました!', 'success');
              }
            }, 2000)
            this.modalAlreadyOpened = false;

          },
          err => {
            if (localStorage.getItem('language') == 'EN' || localStorage.getItem('language') == 'IN') {
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


  getDirection(address: any) {

    window.open('https://www.google.com/maps/dir/?api=1&destination=' + address + '&travelmode=driving', '_blank');

  }


}

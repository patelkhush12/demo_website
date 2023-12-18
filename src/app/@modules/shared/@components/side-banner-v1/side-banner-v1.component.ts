import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import * as sidebarlabel from '../../../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../../../assets/i18n/jp.json';

@Component({
  selector: 'app-side-banner-v1',
  templateUrl: './side-banner-v1.component.html',
  styleUrls: ['./side-banner-v1.component.scss']
})
export class SideBannerV1Component implements OnInit {
  msglabel: any;
  localstoragelanguage: any;

  constructor(
    private _http: HttpClient,
    private _fb: FormBuilder
  ) { }

  contactForm = this._fb.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}")]],
    mobile: ["", [Validators.required, Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')]],
    category: ["", [Validators.required]],
    company: ["", [Validators.required]],
    designation: ["", [Validators.required]],
    user_message: ["", [Validators.required]],
    recaptcha: ["", Validators.required],
    language: [localStorage.getItem('language')]
  });

  formSubmitted = false;
  contactCategory$ = this._http.get<any>(environment.apiUrl + '/contact_us/category/?lang=' + localStorage.getItem('language'));

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
  }
  onSave() {
    this.formSubmitted = true;

    let data = {
      ...this.contactForm.value,
      category: [this.contactForm.value["category"]],
    }
    this._http.post(environment.apiUrl + '/contact_us/public_contact_us/?lang=' + localStorage.getItem('language'), data).subscribe(next => {
      if (localStorage.getItem('language') == 'EN') {
        Swal.fire('Thank you...', 'We will Contact you soon', 'success');


      }
      else {

        Swal.fire('ありがとう...', 'すぐにご連絡いたします', 'success');

      }
      this.contactForm.reset();
      this.formSubmitted = false;
    }, err => {
      if (localStorage.getItem('language') == 'EN') {
        Swal.fire('Server Issue...', 'Server Issue Please Contact us via our email', 'error');
      }
      else {
        Swal.fire('サーバーの問題...', 'サーバーの問題メールでお問い合わせください', 'error');

      }
      this.formSubmitted = false;
      this.contactForm.patchValue({
        recaptcha: ''
      })
    });

  }

}

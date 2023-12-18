import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { SeoService } from '../../shared/@services/seo.service';
import * as sidebarlabel from '../../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../../assets/i18n/jp.json';
@Component({
  selector: 'app-technology-handout-detail',
  templateUrl: './technology-handout-detail.component.html',
  styleUrls: ['./technology-handout-detail.component.scss']
})
export class TechnologyHandoutDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('para') para!: ElementRef;
  localstoragelanguage: any;
  msglabel: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _fb: FormBuilder,
    private _httpClient: HttpClient,
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

  // apiData$ = this.activatedRoute.data.pipe(
  //   map(data => {
  //     this._title.setTitle(`${data.apiData.detail.title} | nCircle Tech`);
  //     return data.apiData
  //   })
  // )

  apiData$: Observable<any> = this._activatedRoute.data.pipe(
    map(data => {
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
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
      return data.apiData
    }),
  );

  formSubmitted = false;
  selectedJob: any = null;

  techHandoutForm = this._fb.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.pattern("[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}")]],
    mobile: ["", [Validators.required, Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')]],
    requirement: ["", [Validators.required]],
    recaptcha: ["", Validators.required],
    language: [localStorage.getItem('language') === 'IN' ? 'EN' : localStorage.getItem('language')]

  });

  onSave(slug: string) {
    this.formSubmitted = true;
    var changelang = localStorage.getItem('language')
    changelang == 'IN' ? changelang = 'EN' : changelang;
    let data = this.techHandoutForm.value
    if (changelang) {
      this._httpClient.post(environment.apiUrl + `/tech_handout/public_handout/${slug}/download/?lang=` + changelang, data).subscribe(next => {
        if (localStorage.getItem('language') == 'EN' || localStorage.getItem('language') == 'IN') {
          Swal.fire('Thank you...', 'We will contact you soon', 'success');
          this.techHandoutForm.reset();
          this.formSubmitted = false;
        } else {
          Swal.fire('ありがとう...', 'すぐにご連絡いたします', 'success');
          this.techHandoutForm.reset();
          this.formSubmitted = false;
        }
      }, err => {
        if (localStorage.getItem('language') == 'EN' || localStorage.getItem('language') == 'IN') {

          Swal.fire('Server Issue...', 'Server Issue Please Contact us via our email', 'error');
          this.formSubmitted = false;
          this.techHandoutForm.patchValue({
            recaptcha: ''
          })
        } else {
          Swal.fire('サーバーの問題...', 'サーバーの問題メールでお問い合わせください', 'error');
          this.formSubmitted = false;
          this.techHandoutForm.patchValue({
            recaptcha: ''
          })
        }
      });
    } else {
      this._httpClient.post(environment.apiUrl + `/tech_handout/public_handout/${slug}/download/?lang=`, data).subscribe(next => {
        Swal.fire('Thank you...', 'We will contact you soon', 'success');
        this.techHandoutForm.reset();
        this.formSubmitted = false;
      }, err => {
        Swal.fire('Server Issue...', 'Server Issue Please Contact us via our email', 'error');
        this.formSubmitted = false;
        this.techHandoutForm.patchValue({
          recaptcha: ''
        })
      });
    }
  }

}

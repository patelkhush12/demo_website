import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from '../shared/@services/seo.service';
import { CareerService } from './@service/career.service';
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
  seo_keyword = ""
  seo_title = ""
  seo_description = ""

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _fb: FormBuilder,
    private _httpClient: HttpClient,
    private _seoService: SeoService,
    private _careerService: CareerService,
    private _title: Title,
    public meta: Meta,

    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    // this._seoService.setTitle("Let's Grow Together with nfinite Possibilities | nCircle Tech");
    // this._seoService.updateMetaData({
    //   title: `Let's Grow Together with nfinite Possibilities | nCircle Tech`,
    //   description: 'nCircle Tech has a vision of empowering innovative and talented minds. We have a team of proficient developers excellent in 2D or 3D engineering development and geometry. We have vacancies for C++ & Revit developers in Pune. Join our team.',
    //   // image: '',
    //   keywords: ''
    // })
  }

  // apiData$: Observable<any> = this._activatedRoute.data.pipe(
  //   map(data => data.careerData)
  // );

  careerData: any;

  apiData$: Observable<any> = this._activatedRoute.data.pipe(
    map(data => {
      this.careerData = data.careerData;

      this.page_size = data.careerData.page_size;
      const detail = this.careerData.results;

      this._title.setTitle(`Industries | nCircle Tech`);
      for (let i = 0; i < detail.length; i++) {


        if (this.seo_keyword.length == 0) {
          this.seo_keyword = this.seo_keyword + detail[i].seo_keywords

        } else {
          this.seo_keyword = this.seo_keyword + "," + detail[i].seo_keywords
        }
        if (this.seo_title.length == 0) {
          this.seo_title = this.seo_title + detail[i].seo_title

        } else {
          this.seo_title = this.seo_title + "," + detail[i].seo_title
        }

        if (this.seo_description.length == 0) {
          this.seo_description = this.seo_description + detail[i].seo_description

        } else {
          this.seo_description = this.seo_description + "," + detail[i].seo_description

        }


      }

      this._seoService.updateMetaData(
        {
          title: this.seo_title,
          description: this.seo_description,
          keywords: this.seo_keyword,
          image: ''
        }
      );

      return data.careerData
    })
  );

  formSubmitted = false;
  selectedJob: any = null;

  contactForm = this._fb.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    mobile: ["", Validators.maxLength(12)],
    recaptcha: ["", Validators.required],
  });

  onSave(slug: string) {

    let file = this.careerPdfFile
    let formValue = this.contactForm.value
    const form = new FormData;
    if (file) {
      form.append('resume', file)
    }
    form.append('name', formValue['name'])
    form.append('email', formValue['email'])
    form.append('mobile', formValue['mobile'])
    form.append('recaptcha', formValue['recaptcha'])

    this.formSubmitted = true;

    let data = this.contactForm.value
    this._httpClient.post(environment.apiUrl + `/career/public_career/${slug}/candidate/`, form).subscribe(next => {
      Swal.fire('Thank you...', 'We will Contact you soon', 'success');
      this.contactForm.reset();
      this.formSubmitted = false;
      this.careerPdfFile = null;
    }, err => {
      Swal.fire('Server Issue...', 'Server Issue Please Contact us via our email', 'error');
      this.formSubmitted = false;
      this.contactForm.patchValue({
        recaptcha: ''
      })
    });

  }

  careerPdfFile: any = null;

  onChange(event: any) {
    this.careerPdfFile = event.target.files[0];
  }

  page = 1;
  page_size = 4;

  onPageChange(pageEvent: any) {
    if (pageEvent != this.page) {
      this.page = pageEvent;
      this._careerService.getAllCareer({ page: this.page, page_size: this.page_size }).subscribe(next => {
        this.careerData.career = next;
      });
    }
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import * as sidebarlabel from '../../../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../../../assets/i18n/jp.json';

@Component({
  selector: 'app-detail-comment',
  templateUrl: './detail-comment.component.html',
  styleUrls: ['./detail-comment.component.scss']
})
export class DetailCommentComponent implements OnInit {
  msglabel: any;
  localstoragelanguage: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _httpClient: HttpClient
  ) { }

  ngOnInit(): void {

    this.commentForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      company: ['', Validators.required],
      recaptcha: [null, Validators.required],
      comment: ['', Validators.required],
      language: [localStorage.getItem('language') === 'IN' ? 'EN' : localStorage.getItem('language')]

    })
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

  @Input()
  comments: any;

  url = 'https://ui-avatars.com/api/?name='

  commentForm!: FormGroup;

  @Input()
  resourceUrl = '';

  saveComment() {

    if (this.resourceUrl.length > 0) {
      this._httpClient.post(environment.apiUrl + this.resourceUrl, this.commentForm.value).subscribe(next => {
        if (localStorage.getItem('language') === 'EN' || localStorage.getItem('language') === 'IN') {
          Swal.fire('Thank you...', 'You comment has been saved', 'success');
        } else {
          Swal.fire('ありがとう...', 'コメントが保存されました', 'success');
        }
        this.commentForm.reset();
      });
    }
  }


  page = 1;
  page_size = 5;

  onPageChange(pageEvent: any) {
    if (pageEvent != this.page) {
      this.page = pageEvent;

      let params = {
        page: this.page.toString(), page_size: this.page_size.toString()
      };

      this._httpClient.get(environment.apiUrl + this.resourceUrl, { params: params }).subscribe(next => {
        this.comments = next;
      })
      // this._blogService.getAllBlog({ page: this.page, page_size: this.page_size }).subscribe(next => {
      //   this.blogListData = next;
      // });
    }
  }

}

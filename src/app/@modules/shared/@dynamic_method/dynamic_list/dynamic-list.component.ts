import { Component, OnInit } from '@angular/core';
import { DnTitleListInterface } from "./../../@dynamic_method/dynamic_method-interface";


@Component({
  selector: 'app-dn-title-list',
  template: `
      <!-- <section class="wrapper bg-light">
        <div class="container position-relative">
            <div class="tab-content">
                <div class="tab-pane fade show active" id="tab2-1">
                    <div class="row">
                        <div class="col-lg-12 card shadow-lg p-10">
                            <h2 class="mb-3">{{data.title}}</h2>
                            <ul class="icon-list bullet-bg bullet-soft-blue">
                                <li *ngFor="let i of data.list">
                                  <i class="uil uil-check"></i>
                                  {{i}}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <div class="content-wrapper">
      <section class="wrapper bg-light">
        <div class="container py-5 position-relative">
            <div class="position-relative">
                <div class="card shadow-lg p-10 mb-5">
                    <div class="row gx-0">
                        <div class="col-lg-12 image-wrapper bg-image bg-cover rounded-top rounded-lg-start">
                          <h2 class="mb-3">{{data.title}}</h2>
                            <ul class="icon-list bullet-bg bullet-soft-blue">
                                <li *ngFor="let i of data.list">
                                  <i class="uil uil-check"></i>
                                  {{i}}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  `,
  styles: [
  ]
})
export class DnTitleListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data!: DnTitleListInterface;

}

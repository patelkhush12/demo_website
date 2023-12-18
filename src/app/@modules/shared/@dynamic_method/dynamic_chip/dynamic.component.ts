import { Component, OnInit } from '@angular/core';
import { DnTitleChips } from '../dynamic_method-interface';

@Component({
    selector: 'app-dn-title-chips',
    template: `
  <section class="wrapper bg-light">
  <div class="container">
  
      <div class="row text-center">
          <!-- <div class="col-xl-10 mx-auto">
              <h2 class="fs-15 text-uppercase text-primary mb-3">What We Do</h2>
              <h3 class="display-4 mb-10 px-xxl-15">Our Technology Catalog</h3>
          </div> -->
      </div>
      <div class="row gy-6">
      <div class="col-md-3 col-lg-3 card p-1 mb-2" *ngFor="let d of data">
        <a class="card1 h-100">
          <h3>{{d.title}}</h3>
          <ng-container *ngFor="let c of d.chips">
            <span class="badge bg-pale-blue text-blue rounded py-1 mb-2 mx-1">{{c}}</span>
          </ng-container>
          <div class="go-corner"></div>
        </a>
      </div>
      </div>
      
  </div>
</section>
  `,
    styles: [
    ]
})
export class DnTitleChipsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    data!: DnTitleChips[];
}

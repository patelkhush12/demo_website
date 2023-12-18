import { Component, OnInit } from '@angular/core';
import { DnTitleChips } from '../dynamic-comp-interface';

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
        <div class="row gy-6 justify-content-center">
        <div class="row gy-6 flex p-5 box justify-content-center">
        <div class="col-md-3 col-lg-3 card p-1 mb-2 me-3 chips" *ngFor="let d of data">
            <a class="card1 h-100"><div>
                <h3>{{d.title}}</h3>
            </div>
            <ng-container>
                <span class="badge bg-pale-blue text-blue rounded py-1 mb-2 mx-1" *ngFor="let c of d.chips">{{c}}</span>
            </ng-container>
            <div class="go-corner"></div>
        </a>
        </div>
        </div>
        </div>

        
    </div>
</section>

  `,
    styleUrls: ['./dn-title-chips.component.scss']
})
export class DnTitleChipsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    data!: DnTitleChips[];
}

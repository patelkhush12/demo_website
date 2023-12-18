import { Component, OnInit } from '@angular/core';
import { DnTitleImageParaInterface } from '../dynamic-comp-interface';



@Component({
    selector: 'app-dn-title-image-para',
    template: `
    <section class="wrapper bg-light my-3">
        <div class="container position-relative">
            <div class="position-relative">
                <div class="card shadow-lg">
                    <div class="row flex" [ngClass]="{'flex-row-reverse':data.is_right_to_left}">

                        <div class="col-lg-6">
                            <div class="p-10 p-md-11 p-lg-13">
                                <div class="" id="swiper-wrapper-5891c9ecbbb76493" aria-live="off">
                                    <div class="" style="width: auto; margin-right: 30px;" role="group"
                                        aria-label="1 / 3">
                                        <div class="fs-sm">
                                            <h1>{{data.title}}</h1>
                                            <p>
                                              {{data.description}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 image-wrapper bg-image bg-cover rounded"
                            style="background-image: url(&quot;{{data.image}}&quot;);">
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  `,
    styles: [
    ]
})
export class DnTitleImageParaComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    data!: DnTitleImageParaInterface;

}

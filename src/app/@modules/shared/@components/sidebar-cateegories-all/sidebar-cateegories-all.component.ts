import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as sidebarlabel from '../../../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../../../assets/i18n/jp.json';

@Component({
  selector: 'app-sidebar-cateegories-all',
  templateUrl: './sidebar-cateegories-all.component.html',
  styleUrls: ['./sidebar-cateegories-all.component.scss']
})
export class SidebarCateegoriesAllComponent implements OnInit {

  msglabel: any;
  localstoragelanguage: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

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

  @Input()
  categories: any = [];

  @Input()
  route = './';



  navigateToCategory(slug: any) {
    let currentQueryParams = this.activatedRoute.snapshot.queryParams;


    if (slug.length > 0) {
      currentQueryParams = {
        ...currentQueryParams,
        category: slug
      };
    } else {
      if (currentQueryParams.hasOwnProperty('category')) {
        let { category, ...noCategoryQueryParam } = currentQueryParams;
        currentQueryParams = noCategoryQueryParam;
      }
    }

    this.router.navigate(
      [this.route],
      {
        queryParams: currentQueryParams,
      });
  }


}

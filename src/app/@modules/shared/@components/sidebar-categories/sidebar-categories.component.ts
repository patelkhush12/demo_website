import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as sidebarlabel from '../../../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../../../assets/i18n/jp.json';

@Component({
  selector: 'app-sidebar-categories',
  templateUrl: './sidebar-categories.component.html',
  styleUrls: ['./sidebar-categories.component.scss']
})
export class SidebarCategoriesComponent implements OnInit {
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

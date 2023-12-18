import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bottom-bar-share-n-category',
  templateUrl: './bottom-bar-share-n-category.component.html',
  styleUrls: ['./bottom-bar-share-n-category.component.scss']
})
export class BottomBarShareNCategoryComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  @Input()
  categories:any[] = [];

  @Input()
  route = '';

  navigateToCategory(slug:any) {
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


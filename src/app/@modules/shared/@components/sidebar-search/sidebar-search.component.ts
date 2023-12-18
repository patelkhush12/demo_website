import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as sidebarlabel from '../../../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../../../assets/i18n/jp.json';

@Component({
  selector: 'app-sidebar-search',
  templateUrl: './sidebar-search.component.html',
  styleUrls: ['./sidebar-search.component.scss']
})
export class SidebarSearchComponent implements OnInit {
  msglabel: any;
  localstoragelanguage: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) { }

  @Output()
  searchChange = new EventEmitter();

  @Input()
  route = '/'

  ngOnInit(): void {
    let currentQueryParams = this.activatedRoute.snapshot.queryParams;
    let searchText = '';
    if (currentQueryParams.hasOwnProperty('search')) {
      searchText = currentQueryParams['search'];
    }
    this.searchForm = new FormGroup({
      search: new FormControl(searchText),
    });

    this.searchForm.get('search')?.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe(next => {
      // this.searchChange.emit(next);
      let currentQueryParams = this.activatedRoute.snapshot.queryParams;


      if (next.length > 0) {
        currentQueryParams = {
          ...currentQueryParams,
          search: next
        };
      } else {

        if (currentQueryParams.hasOwnProperty('search')) {
          let { search, ...noSearchQueryParam } = currentQueryParams;
          currentQueryParams = noSearchQueryParam;
        }
      }


      this.router.navigate(
        [this.route],
        {
          queryParams: currentQueryParams,
        });
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

  searchForm!: FormGroup;
}

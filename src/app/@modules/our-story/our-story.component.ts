import { Component, Inject, OnInit, PLATFORM_ID, AfterViewInit, ElementRef, ViewChild, } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { SeoService } from '../shared/@services/seo.service';
import { isPlatformBrowser } from '@angular/common';
import { BrandApiBrand } from './@service/brand.service';
import { log } from 'console';
@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.scss']
})
export class OurStoryComponent implements OnInit, AfterViewInit {
  @ViewChild('para') para!: ElementRef;

  brands: any = []
  seo_keyword = ""
  seo_title = ""
  seo_description = ""
  bannerData: any;
  // private _title: any;
  // evalutions:any=[]
  // OurBeliefs:any=[]
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object,
    public data: BrandApiBrand,
    private _title: Title,
    public meta: Meta,
    public brandAPI: BrandApiBrand
  ) {
  }

  ngAfterViewInit() {
    // ...
    for (let i = 0; i < this.para.nativeElement.getElementsByTagName('a').length; i++) {
      this.para.nativeElement.getElementsByTagName('a')[i].style.color = "blue"
    }
  }

  ngOnInit(): void {
    this.getBannerData();
    this.intial()

    // this._seoService.setTitle("One of The Best 3D Engineering Software Development Company | nCircle Tech");
    // this._seoService.updateMetaData({

    //   title: 'One of The Best 3D Engineering Software Development Company | nCircle Tech',

    //   description:this.seo_description,
    //   // image: '',
    //   keywords: ''
    // })
  }

  apiData$: Observable<any> = this._activatedRoute.data.pipe(
    map(data => {
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      return data.apiData
    })
  );
  brand: Observable<any> = this._activatedRoute.data.pipe(
    map(data => {

      return data.apiData
    }),

  )
  intial() {
    this.data.getAllbrand().subscribe({
      next: (res) => {

        this.brands = res;
        // console.log(this.brands[0].seo_title)
        // this._title.setTitle(`Our-Story | nCircle Tech`);
        this.seo_keyword = this.brands[0].seo_keywords;
        this.seo_title = this.brands[0].seo_title;
        // let title = this.brands[0].seo_title
        this.seo_description = this.brands[0].seo_description;
        // this._title.setTitle(`${{ title }} | nCircle Tech`);
        this._title.setTitle(this.seo_title);
        this._seoService.updateMetaData(
          {
            title: this.seo_title,
            description: this.seo_description,
            keywords: this.seo_keyword,
            image: ''
          }
        );
        // this.evalutions=res
        // this.OurBeliefs=res


      },
      error: () => {

        // alert('Error Happen')
      }
    })
  }

  getBannerData() {
    this.brandAPI.getBannerData().subscribe(response => {
      this.bannerData = response;
    });
  }

}

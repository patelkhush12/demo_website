import { SocialLinks } from '../../constants';
import { Component, HostListener, Input, OnInit, ViewChildren, Renderer2, ViewChild, ElementRef, QueryList } from '@angular/core';
import { SeoService } from '../../@services/seo.service';
import { ServiceApiService } from '../../../services/@services/service-api.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as   sidebarlabel from '../../../../../assets/i18n/en.json';
import * as sidebarlabel1 from '../../../../../assets/i18n/jp.json';
import { RouterModule, Routes, Router } from '@angular/router';
import { join } from 'path';
import { NgxSpinnerService } from 'ngx-spinner';

// import { SubProductService } from 'src/app/@modules/product-store/@services/sub-product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  msglabel: any;
  localstoragelanguage: any;

  @ViewChild("element", { static: true }) element!: ElementRef;
  @ViewChild("element12", { static: true }) element12!: ElementRef;

  // @ViewChild("elementlan", { static: true }) elementlan!: ElementRef;
  // @ViewChildren('element') components!:QueryList<any>;
  @ViewChild("elementheader", { static: true }) elementheader!: ElementRef;
  checked: boolean = false;
  isDropdownVisible: boolean = false;
  status: boolean = false;
  scrolled: boolean = false;
  seo_keyword = ""
  seo_title = ""
  seo_description = ""
  serviceList: any = []
  productlist: any = []
  subserviceList: any = []
  submenulist: any = []
  subdata: { key: any, value: any }[] = []
  subdatashow: boolean = false;
  openModel: any = 'false';
  seletedoption: any



  isDropdownDisabled(): boolean {
    return this.subdata.length === 0;
  }
  // for initialization
  constructor(
    private renderer: Renderer2,
    public _service: ServiceApiService,
    private _seoService: SeoService,
    private _httpClient: HttpClient,
    private router: Router,
   private spinner: NgxSpinnerService
    // public _product:SubProductService


  ) {
    this.scrolled = window.pageYOffset > 48;
  }
  showDropdown: boolean = false;


  goto(title: any) {
    // console.log(title,"title")
    // console.log(document.getElementById('sec1'))
    document.getElementById("sec" + title)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
    this.isDropdownOpen = false
  }
  toggleDropdown1(hovering: boolean) {
    this.showDropdown = hovering;
    // this.showDropdown=false  
  }
  // @ViewChild('dropdownMenu') dropdownRef !: ElementRef;
  // showDropdown: boolean = false;
  // @HostListener('mouseenter')
  // onMouseEnter() {
  //   this.showDropdown = true;
  // }
  isDropdownOpen: boolean = false;

  openDropdown() {
    this.isDropdownOpen = true;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }
  onMouseLeave(event: any) {
    if (!(event.relatedTarget instanceof HTMLElement) || !event.relatedTarget.classList.contains('dropdown')) {
      this.closeDropdown();
    }
  }
  activateSubMenu(subdata: any) {
    // console.log(subdata)
    subdata.active = true;
  }
  // @ViewChild('dropdown', { static: true }) dropdownRef1 !: ElementRef;
  // showDropdown1: boolean = false;
  // @HostListener('mouseenter1')
  // onMouseEnter1() {
  //   this.showDropdown = true;
  // }
  // // Function to hide the dropdown when not hovering
  // @HostListener('mouseleave')
  // onMouseLeave() {
  //   this.showDropdown = false;
  // }
  deactivateSubMenu(subdata: any): void {
    subdata.active = false;
  }
  ngOnInit() {
    this.getproduct();
    localStorage.setItem("openModel", this.openModel);
    this.localstoragelanguage = localStorage.getItem('language');
    this.seletedoption = this.localstoragelanguage;
    console.log("DFgdfgdfgf", this.router.url); //  /routename


    // const abc = localStorage.getItem('language');
    // console.log(this.localstoragelanguage
    // );

    if (this.localstoragelanguage == "EN") {

      this.msglabel = sidebarlabel
      // console.log(this.msglabel);

    } else if (this.localstoragelanguage == "IN") {
      this.msglabel = sidebarlabel

    }
    else {
      this.msglabel = sidebarlabel1

    }
    this.getdata();

    this.getsubservices();

    console.log
    if (localStorage.getItem('language') == 'IN') {
      console.log("this is default")
      this.selectedLanguage = ''
    } else {
      console.log("this is default11")
      this.selectedLanguage = localStorage.getItem('language');

    }
    // this.lung(Event)

    // console.log("basch",this.msglabel);
  }
  getproduct() {
    var changelang = localStorage.getItem('language')
    changelang == 'IN' ? changelang = 'EN' : changelang;
    this._httpClient.get(environment.apiUrl + '/product/public_product/?lang=' + changelang).subscribe(next => {
      this.productlist = next
      // console.log(this.productlist);

    })


  }
  gotoproduct(title: any) {
    // console.log(title,"title")

    document.getElementById("sec" + title)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
  // goto(title:any){
  //   console.log(title,"title")
  //   // console.log(document.getElementById('sec1'))
  //   document.getElementById("sec"+title)?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //     inline: "nearest"
  //   });
  //   this.isDropdownOpen = false
  // }
  // toggleDropdown(): void {
  //   this.isDropdownVisible = !this.isDropdownVisible;
  // }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.pageYOffset > 48;
  }
  ngAfterViewInit() {
    // var v = document.createElement("script");
    // v.type = "text/javascript";
    // v.innerHTML = "function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages : 'en,ja' }, 'google_translate_element'); } ";
    // this.element12.nativeElement.appendChild(v);
    // var s = document.createElement("script");
    // s.type = "text/javascript";
    // s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    // this.element12.nativeElement.appendChild(s);













    //    var v1 = document.createElement("script");
    // v1.type = "text/javascript";
    // v1.innerHTML = "function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element1'); } ";
    // this.element.nativeElement.appendChild(v1);

    // var v = document.createElement("script");
    // v.type = "text/javascript";
    // v.innerHTML = "function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element'); } ";
    // this.element.nativeElement.appendChild(s);
    // var s = document.createElement("script");
    // s.type = "text/javascript";
    // s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    // this.element.nativeElement.appendChild(s);


    // var vheader = document.createElement("script");
    // vheader.type = "text/javascript";
    // vheader.innerHTML = "function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element'); } ";
    // this.elementlan.nativeElement.appendChild(vheader);

    // var slan = document.createElement("script");
    // slan.type = "text/javacript";
    // slan.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    // this.elementlan.nativeElement.appendChild(slan);



    // var v1 = document.createElement("script");
    // v1.type = "text/javascript";
    // v1.innerHTML = "function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element'); } ";

    // this.elementlan.nativeElement.appendChild(v1);
    // var s1 = document.createElement("script");
    // s1.type = "text/javascript";
    // s1.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    // this.elementlan.nativeElement.appendChild(s1);


  }
  @Input()
  navColorClass: any = '';

  @Input()
  navBgClass: any = '';

  @Input()
  navTextModeIsWhite = false;
  ourstory: any = '私たちの物語';
  team: any = 'チーム';
  event: any = 'イベント';
  media: any = 'メディア報道';

  aboutUsEN = [
    { title: 'Our Story', routerLink: '/our-story' },
    { title: 'Team', routerLink: '/team' },
    { title: 'Events', routerLink: '/events' },
    { title: 'Media Coverage', routerLink: '/media-coverage' },
    // { title: 'Clients', routerLink: '/clients' },
    // { title: 'Career', routerLink: '/career' },
  ]


  aboutUsJP = [
    { title: this.ourstory, routerLink: '/our-story' },
    { title: this.team, routerLink: '/team' },
    { title: this.event, routerLink: '/events' },
    { title: this.media, routerLink: '/media-coverage' },
    // { title: 'Clients', routerLink: '/clients' },
    // { title: 'Career', routerLink: '/career' },
  ]

  socialLinks = SocialLinks;

  showNavbar = false;
  navBarToggle(navbarContentElem: any) {
    this.showNavbar = !this.showNavbar;
    if (this.showNavbar) {
      this.renderer.addClass(navbarContentElem, "offcanvas-start");
      this.renderer.addClass(navbarContentElem, "show");
      this.renderer.addClass(navbarContentElem, "my-sidebar-show");
    } else {
      this.renderer.removeClass(navbarContentElem, "offcanvas-start");
      this.renderer.removeClass(navbarContentElem, "show");
      this.renderer.removeClass(navbarContentElem, "my-sidebar-show");
    }
    // alert("Toggle")
  }
  getdata() {

    this._service.getAllService({}).subscribe({
      next: (res) => {
        // console.log(res)
        this.serviceList = res.results
        // console.log("bbbbbbb",this.serviceList)

        for (let i = 0; i < this.serviceList.length; i++) {

          if (this.seo_keyword.length == 0) {
            this.seo_keyword = this.seo_keyword + this.serviceList[i].seo_keywords

          } else {
            this.seo_keyword = this.seo_keyword + "," + this.serviceList[i].seo_keywords
          }
          if (this.seo_title.length == 0) {
            this.seo_title = this.seo_title + this.serviceList[i].seo_title

          } else {
            this.seo_title = this.seo_title + "," + this.serviceList[i].seo_title
          }

          if (this.seo_description.length == 0) {
            this.seo_description = this.seo_description + this.serviceList[i].seo_description

          } else {
            this.seo_description = this.seo_description + "," + this.serviceList[i].seo_description

          }


        }

        // this._seoService.updateMetaData(
        //   {
        //     title: this.seo_title,
        //     description: this.seo_description,
        //     keywords: this.seo_keyword
        //   })
      },
      error: () => {

        // alert('Error Happen')
      }
    })
  }
  submenu(id: any) {
    this.submenulist = id
    console.log(id);
    this.filterRecordsById();


  }
  getsubservices() {
    this._service.getAllsubService().subscribe({
      next: (res: any) => {

        // console.log("hhhh",res.results)
        // for(let i=0;i<res;i++){
        // console.log(res.results)

        // if (res.results && res.results.length > 0) {
        //   const mainServiceId = res.results[0].main_service.id;
        //   console.log("main_service: id", mainServiceId);
        // }

        this.subserviceList = res.results;
        console.log(this.subserviceList);

        // console.log("sdb",this.subserviceList);

      }
    })
  }
  filterRecordsById() {
    // alert(this.submenulist)selectedLanguage

    this.subdatashow = true;
    this.subserviceList.map((d: any, _: any) => {

      // console.log("subservice  data",this.submenulist,d,_)
    })
    console.log(this.subserviceList);

    const abc = this.subserviceList.filter((item: { id: any; main_service: any; }) => item.main_service.id === this.submenulist);

    // const xyz =  this.subserviceList.filter((item: { slug:any }) => item.slug === this.submenulist);
    // console.log("xyz", xyz);
    //  this.subdata=abc.map((d:any) =>{title :d.title});
    console.log(abc);

    this.subdata = abc.map((d: any) => {
      const obj = {
        'key': d.title,
        'value': d.slug,
      }

      return obj
    })
    if (this.subdata) {
    }
    //     console.log("djnbh",this.subdata.length);

    // console.log("hvhvhvh", this.subdata);

    if (abc) {
      // console.log("Selected SubService:", abc);
      // Do something with the selectedSubService if needed.
    } else {
      // console.log("SubService not found for the provided ID.");
    }
    if (this.subdata.length > 0) {
      this.subdatashow = true;
    } else {
      this.subdatashow = false;
    }
    this.subdata.map(d => {
      // console.log("map",d)
    })
    // console.log("abc", this.subdata);

  }


  isActive() {
    if (this.status = true) {
      this.checked = true;
      return this._httpClient.get<any>(environment.apiUrl + '/EN')

    } else {

      this.checked = false;
      return this._httpClient.get<any>(environment.apiUrl + '/JP')
    }
  }
  @ViewChild('dropdownMenu') dropdownMenu !: ElementRef;
  // showDropdown = false;

  @HostListener('document:click', ['$event.target'])
  onClick(target: any) {
    // Check if the click event occurred outside the dropdown, and hide it.
    // if (!this.dropdownMenu.nativeElement.contains(target)) {
    //   this.showDropdown = false;
    // }
    this.showDropdown = false;
  }

  // showDropdown = false;

  toggleDropdown() {


    // console.log("badagydgydgvgn");
    if (this.showDropdown == true) {
      this.showDropdown = false;
    }
    else {
      this.showDropdown = true
    }
  }


  selectedLanguage: any;
  staticLanguages: any = [
    // {
    //   name: 'Select Language',
    //   icon: 'globe' // Replace 'globe' with the appropriate Font Awesome icon class for the "Select Language" option.
    // },
    {
      name: 'IN',
      icon: 'flag'
    },
    {
      name: 'EN',
      icon: 'flag' // Replace 'flag' with the appropriate Font Awesome icon class for the "EN" option.
    },
    {
      name: 'JP',
      icon: 'flag' // Replace 'flag' with the appropriate Font Awesome icon class for the "JP" option.
    },

  ];

  lung(event: any) {
   

    console.log(window.location.pathname)
    this.selectedLanguage = event?.target?.value;
    console.log("jnsnj", this.selectedLanguage);
    let lan = '';
    var updatedURL: any = '';
    localStorage.setItem('language', this.selectedLanguage);
    
    // Get the current URL and split it into parts using '/'
    console.log(this.router.url)
    const urlParts = this.router.url.split('/');
    console.log('urlPa', urlParts)
    // console.log()
    if (this.selectedLanguage == 'IN') {
      console.log("this is default")

      urlParts[urlParts.length - 1];
      
      // urlParts[1] = '';
      // urlParts.splice(1, 1)
      updatedURL = urlParts[urlParts.length - 1]

    } else if (this.selectedLanguage == 'JP') {
        lan = 'JP/'
        this.spinner.show()

      } else if (this.selectedLanguage == 'EN') {
        lan = 'EN/'
        this.spinner.show()

      }
      else {
        lan = ''
        this.spinner.show()

      }

    // urlParts.join('/');
    if (this.router.url == '' || this.router.url == '/' || this.router.url == '/EN/' || this.router.url == '/JP/' || this.router.url == '/JP' || this.router.url == '/EN') {
      console.log("this is IN")
      // updatedURL = '/'
      console.log(this.selectedLanguage)
      if (this.selectedLanguage === 'IN') {
        console.log("this is IN")
        // this.router.navigate(['/'])
        // this.spinner.show()
              updatedURL = '/'
      } else if(this.selectedLanguage === 'JP') {        
        updatedURL = '/JP'
      }else{        
        updatedURL = '/EN'
      }
    } else {
      console.log(this.router.url.includes("EN"),this.router.url.includes("JP"));
      
      updatedURL = lan.concat(this.router.url.includes("EN")||this.router.url.includes("JP") ||this.router.url.includes("IN")? urlParts[2]:urlParts[1])
    }

    // window.location.reload();

    // this.router.navigateByUrl(updatedURL)
    // if(updatedURL)
    // {
    //   window.location.reload();
    // }
    this.spinner.show();
    this.router.navigateByUrl(updatedURL)
      .then(() => {
        this.spinner.hide()

        window.location.reload();

        // window.location.reload();
        // if (this.router.url == '' || this.router.url == '/' || this.router.url == '/EN/' || this.router.url == '/JP/' || this.router.url == '/JP' || this.router.url == '/EN') {
        //   console.log("this is IN")
        //   if (this.selectedLanguage === 'IN') {
        //     console.log("this is IN")
        //     // this.router.navigate(['/'])
        //     updatedURL = '/'
        //     this.router.navigateByUrl(updatedURL)
        //   }
        //   this.router.navigateByUrl(updatedURL)
        // }
      });

    console.log(this.router.url)
    console.log("updated", updatedURL)
    // }
  }
  // Join the URL parts back into a string
  // const updatedURL = urlParts.join('/');
  // console.log(updatedURL)
  // Use the Angular Router to navigate to the updated URL


  // window.location.reload();

}
  // staticLanguages:any = [
  //   {
  //     name:'EN'
  //   },
  //   {
  //     name:'JP'
  //   }
  // ]
  // selectedLanguage:any;

  // lung(event:any){
  //   console.log("xbDH",event.target.value);
  //  this.selectedLanguage = event.target.value;
  //  alert(this.selectedLanguage); 
  //  localStorage.setItem('language',this.selectedLanguage);
  //  window.location.reload();
  // }
  // yes() {
  //   this.nozalmasterOnj.UpdatedBy = Number(localStorage.getItem('UserID'));

  //   this.IsActive = 1;

  //   console.log("ShiftId", this.nozalmasterOnj.NozelID)
  //   if (this.IsActive == 1) {
  //     this.IsActive = 0;
  //     this.api.deletenozal(this.nozalmasterOnj.NozelID, this.nozalmasterOnj.UpdatedBy).subscribe(Response => {
  //       this.IsActive = 1
  //       this.getAllnozalmaster(this.IsActive);
  //       this.visible2 = false
  //     })
  //   }
  // }
  // serviceList = [
  //   { title: 'Service 1' },
  //   { title: 'Service 2' },
  //   // Add more services as needed
  // ];

  // showDropdown = false;

  // navBarToggle(navbarContentElem: any) {
  //   // Implement any specific logic for the navBarToggle function if required
  // }



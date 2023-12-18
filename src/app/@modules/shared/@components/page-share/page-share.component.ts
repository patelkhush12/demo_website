import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-share',
  templateUrl: './page-share.component.html',
  styleUrls: ['./page-share.component.scss']
})
export class PageShareComponent implements OnInit {

  pageUrl = window.location.href;
  title = "";
  socialIcons = [
    {
      title: "facebook",
      iconClass: "uil uil-facebook",
      iconStyle: "fb",
      link: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(this.pageUrl) + ""
    },

    {
      title: "twitter",
      iconClass: "uil uil-twitter",
      iconStyle: "tw",
      link: "http://twitter.com/intent/tweet?text=" + encodeURIComponent(this.title) + "&" + encodeURIComponent(this.pageUrl) + ""
    },

    {
      title: "linkedin",
      iconClass: "uil uil-linkedin",
      iconStyle: "ln",
      link: "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(this.pageUrl) + "&title=" + encodeURIComponent(this.title) + ""
    },
    {
      title: "whatsapp",
      iconClass: "uil uil-whatsapp",
      link: "whatsapp://send?text=" + encodeURIComponent(this.pageUrl) + "&title=" + encodeURIComponent(this.title) + ""
    },
    // {
    //   title: "pinterest",
    //   iconClass: "fab fa-pinterest-p",
    //   iconStyle: "gg",
    //   link: "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(this.pageUrl) + ""
    // }
  ];

  openSocialPopup(social: any) {
    window.open(social.link, "MsgWindow", "width=600,height=600")
  }
  ngOnInit(): void {

  }

}

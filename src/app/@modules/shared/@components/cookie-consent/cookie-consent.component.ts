import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss']
})
export class CookieConsentComponent implements OnInit {

  constructor() { }
  accepted = false;
  ngOnInit(): void {
    if (localStorage.getItem('cookieAccepted')) {
      let val = localStorage.getItem('cookieAccepted');
      this.accepted = JSON.parse(val as any);
    }
  }

  onAccept(){
    localStorage.setItem('cookieAccepted','true');
    this.accepted = true;
  }
}

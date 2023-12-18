import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section-v1',
  templateUrl: './hero-section-v1.component.html',
  styleUrls: ['./hero-section-v1.component.scss']
})
export class HeroSectionV1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  label = "Section";

}

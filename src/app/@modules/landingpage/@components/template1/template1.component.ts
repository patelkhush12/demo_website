import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.scss']
})
export class Template1Component implements OnInit {

  constructor() { }
  bannertitle: any = "Common Pitfalls to Avoid while Developing 3D Cloud Experience";

  ngOnInit(): void {
  }


}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-with-page-title',
  templateUrl: './image-with-page-title.component.html',
  styleUrls: ['./image-with-page-title.component.scss']
})
export class ImageWithPageTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  image = '';

  @Input()
  video = '';

  @Input()
  title = '';
}

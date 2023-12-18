import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-event-recent',
  templateUrl: './sidebar-event-recent.component.html',
  styleUrls: ['./sidebar-event-recent.component.scss']
})
export class SidebarEventRecentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  recentItem: any = [];

  @Input()
  label = 'Recent';

   @Input()
  route = './';

  blogDefaultImage = 'assets/img/photos/blog-bg.jpg'

}

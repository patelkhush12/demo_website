import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations'; 

export const fadeInOutTimeout = 500;
export const fadeInOut = trigger('fadeInOut', [
  transition('void => *', [style({ opacity: '0', transform: 'translateY(-20%)' }), animate(fadeInOutTimeout)]),
  transition('* => void', [animate(fadeInOutTimeout, style({ opacity: '0' }))]),
  transition('* => *', [
    style({ opacity: '0', transform: 'translateY(-20%)' }),
    animate(fadeInOutTimeout, style({ opacity: '1', transform: 'translateY(0%)' })),
  ]),
]);
@Component({
  selector: 'app-home-counter',
  templateUrl: './home-counter.component.html',
  styleUrls: ['./home-counter.component.scss'],
  animations: [fadeInOut,],

})
export class HomeCounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() navColorClass: string | null = '';
  @Input() currentNos = '01';
}

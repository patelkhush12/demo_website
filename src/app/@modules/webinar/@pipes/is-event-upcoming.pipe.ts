import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isEventUpcoming'
})
export class IsEventUpcomingPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    const currentDate = new Date();
    const apiDate = new Date(value);
    return apiDate > currentDate;
  }

}

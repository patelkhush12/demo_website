import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByRole'
})
export class FilterByRolePipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    return value.filter(obj => {
      return obj.team_type == args;
    });
  }

}

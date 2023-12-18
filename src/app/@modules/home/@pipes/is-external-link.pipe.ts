import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isExternalLink'
})
export class IsExternalLinkPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.startsWith("http://" || "https://");
  }

}

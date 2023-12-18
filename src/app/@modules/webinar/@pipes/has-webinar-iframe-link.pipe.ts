import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hasWebinarIframeLink'
})
export class HasWebinarIframeLinkPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let key = /https:\/\/www.youtube.com/;
    let match = value.search(key);
    if (match != -1) {
      let m,
        urls = [],
        rex = /<iframe[^>]*src=[\"|']([^'\"]+)[\"|'][^>]*>/g;
      while (m = rex.exec(value)) {
        urls.push(m[1]);
      }
      return urls[0]
    }
    return null;

  }

}

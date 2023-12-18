import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateHtml'
})
export class TruncateHtmlPipe implements PipeTransform {

  transform(value: any, args: any[]): string {
    const charLimit = args.length > 0 ? parseInt(args[0], 10) : 20;
    const trail = args.length > 1 ? args[1] : '...';
    if (!value || value.length <= charLimit) {
      return value;
    }
    let without_html = value.replace(/<(?:.|\n)*?>/gm, ' ');
    // without_html = without_html.replace(/\r?\n|\r/gm, " ");
    // return without_html.substring(0, charLimit) + "...";
    return without_html.length > charLimit ? without_html.substring(0, charLimit) + trail : without_html;
  }

}

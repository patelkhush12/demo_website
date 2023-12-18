import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface MetaData {
  title: string,
  description: string,
  image: string,
  keywords: string,
  authors?: string,
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly appTitle = 'nCircle Tech | Home Page';
  private readonly appDescription = 'Best BIM & CAD software development company serving globally. nCircle Tech has expertise in Machine Learning. Also CAD & BIM plugins services & solutions in AEC & Manufacturing.';
  apiData: any;
  title1: any = ''
  constructor(
    private metaTagService: Meta,
    private readonly titleService: Title,
    // public meta:Meta
  ) { }

  initDefaultMetaInformation(): void {
    this.titleService.setTitle(this.appTitle);

    this.metaTagService.addTags([
      { name: 'robots', content: 'index, follow' },
      // {name: 'author', content: ''},
    ]);
  }


  setTitle(title: string): void {
    this.titleService.setTitle(title);
  }

  updateMetaData(metaData: MetaData): void {
    console.log(metaData);

    const tags = [
      { name: 'description', content: metaData.description },
      { name: 'keywords', content: metaData.keywords },
      { name: 'author', content: metaData.authors ? metaData.authors : "" },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:image', content: metaData.image },
      { name: 'twitter:title', content: metaData.title },
      { name: 'twitter:description', content: metaData.description },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black translucent' },
      { name: 'apple-mobile-web-app-title', content: metaData.title },
      { name: 'apple-touch-startup-image', content: metaData.image },
      { name: 'og:title', content: metaData.title },
      { name: 'og:description', content: metaData.description },
      { name: 'image', property: 'og:image', content: metaData.image },
      { name: 'og:image:width', content: "1200" },
      { name: 'og:image:height', content: "627" }
    ];

    tags.forEach((tag: any) => this.metaTagService.updateTag(tag));

  }


  addMetaData(metaData: MetaData): void {
    this.metaTagService.addTags([
      { name: 'description', content: metaData.description },
      { name: 'keywords', content: metaData.keywords },
      { name: 'author', content: metaData.authors ? metaData.authors : "" },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:image', content: metaData.image },
      { name: 'twitter:title', content: metaData.title },
      { name: 'twitter:description', content: metaData.description },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black translucent' },
      { name: 'apple-mobile-web-app-title', content: metaData.title },
      { name: 'apple-touch-startup-image', content: metaData.image },
      { name: 'og:title', content: metaData.title },
      { name: 'og:description', content: metaData.description },
      { name: 'image', property: 'og:image', content: metaData.image },
      { name: 'og:image:width', content: "1200" },
      { name: 'og:image:height', content: "627" }

    ])

    // tags.forEach((tag: any) => {
    // this.meta.addTags(tag)
    // });
    // this.metaTagService.addTags(tags)
  }
}

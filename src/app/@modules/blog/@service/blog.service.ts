import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Result {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  authors: number[];
  publish: boolean;
  created_at: string;
  updated_at: string;
  categories: any[];
  views: number;
  blog_date: string;
  language: any;
}

export interface BlogListResponse {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}
export interface SeolistResponse {
  pagename: string
  seo_title: string
  seo_description: string
  seo_keywords: string
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private _httpClient: HttpClient
  ) { }
  // const abc = localStorage.getItem('language');
  // if(abc)
  // {
  //   return this.http.get(environment.apiUrl + '/industry/public_industry/'+abc);

  // }
  // else
  // {
  //   return this.http.get(environment.apiUrl + '/industry/public_industry/' );
  // }
  getAllBlog(params: any = {}) {
    if (params.hasOwnProperty('category')) {
      params = {
        ...params,
        categories__slug: params["category"]
      };
    }
    var changelang = localStorage.getItem('language');
    changelang == 'IN' ? changelang = 'EN' : changelang;

    if (changelang) {
      return this._httpClient.get(environment.apiUrl + '/blog/public_blog_list/?lang=' + changelang, { params: params });

    }
    else {
      console.log(changelang);

      return this._httpClient.get(environment.apiUrl + '/blog/public_blog_list/?lang=', { params: params });
    }
    // return this._httpClient.get<BlogListResponse>(environment.apiUrl + '/blog/public_blog_list/?lang', { params: params })
  }

  getSingleBlog(slug: string) {

    return this._httpClient.get<BlogListResponse>(environment.apiUrl + '/blog/public_blog_list/' + slug + '/')
  }

  getSingleBlogComment(slug: string, params: any) {
    var changelang = localStorage.getItem('language');
    changelang == 'IN' ? changelang = 'EN' : changelang;

    if (changelang) {
      return this._httpClient.get(environment.apiUrl + '/blog/recent_blog/?lang=' + changelang + slug + '/comment/', { params: params });

    }
    else {
      return this._httpClient.get(environment.apiUrl + '/blog/recent_blog/?lang=');
    }
    // return this._httpClient.get<BlogListResponse>(environment.apiUrl + '/blog/public_blog_list/' + slug + '/comment/', { params: params })
  }



  getRecentBlog() {
    const currentURL = window.location.href;
    console.log(currentURL);
    const url = new URL(currentURL);
    const pathName = url.pathname; // This will give you "/EN/blogs/kja"

    // Split the path name by '/' to get individual parts
    const pathParts = pathName.split('/');

    // The value you want is likely at index 1 (assuming the path structure is consistent)
    const language = pathParts[1];
    if (language == 'EN' || language == "JP") {
      return this._httpClient.get(environment.apiUrl + '/blog/recent_blog/?lang=' + language);

    }
    var changelang = localStorage.getItem('language');
    changelang == 'IN' ? changelang = 'EN' : changelang;

    if (changelang) {
      return this._httpClient.get(environment.apiUrl + '/blog/recent_blog/?lang=' + changelang);

    }
    else {
      return this._httpClient.get(environment.apiUrl + '/blog/recent_blog/?lang=');
    }
    // return this._httpClient.get<BlogListResponse>(environment.apiUrl + '/blog/recent_blog/')
  }

  getBlogCategories() {
    const currentURL = window.location.href;
    console.log(currentURL);
    const url = new URL(currentURL);
    const pathName = url.pathname; // This will give you "/EN/blogs/kja"

    // Split the path name by '/' to get individual parts
    const pathParts = pathName.split('/');

    // The value you want is likely at index 1 (assuming the path structure is consistent)
    const language = pathParts[1];
    if (language == 'EN' || language == "JP") {
      return this._httpClient.get(environment.apiUrl + '/blog/blog_categories/?lang=' + language);

    }
    var changelang = localStorage.getItem('language');
    changelang == 'IN' ? changelang = 'EN' : changelang;

    if (changelang) {
      return this._httpClient.get(environment.apiUrl + '/blog/blog_categories/?lang=' + changelang);

    }
    else {
      return this._httpClient.get(environment.apiUrl + '/blog/blog_categories/?lang=');
    }
    // return this._httpClient.get<BlogListResponse>(environment.apiUrl + '/blog/blog_categories/?lang=')
  }


  getBannerData() {
    if (localStorage.getItem('language') === 'EN' || localStorage.getItem('language') === 'IN') {
      return this._httpClient.get<BlogListResponse>(environment.apiUrl + '/banner/banner/blog/?lang=' + 'EN')
    } else {
      return this._httpClient.get<BlogListResponse>(environment.apiUrl + '/banner/banner/burogu/?lang=' + 'JP')

    }
  }

  getBannerDataIndustry() {
    if (localStorage.getItem('language') === 'EN' || localStorage.getItem('language') === 'IN') {
      return this._httpClient.get<BlogListResponse>(environment.apiUrl + '/banner/banner/industries/?lang=' + 'EN')
    } else {
      return this._httpClient.get<BlogListResponse>(environment.apiUrl + '/banner/banner/chan-ye/?lang=' + 'JP')

    }
  }
  getseodata() {
    return this._httpClient.get<SeolistResponse>(environment.apiUrl + '/main_page_seo/main_page_seo/Industry')
  }
  getseodatablog() {
    return this._httpClient.get<SeolistResponse>(environment.apiUrl + '/main_page_seo/main_page_seo/Blog')

  }
}

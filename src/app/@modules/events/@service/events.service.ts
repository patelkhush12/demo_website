import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Result {
	id: number;
	title: string;
	slug: string;
	image: string;
	from_date: string;
	to_date: string;
	description: string;
	location: string;
	publish: boolean;
	created_at: string;
	updated_at: string;
	categories: number[];
	views: number;
	langulage: string
}

export interface EventListResponse {
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
export class EventsService {

	constructor(
		private _httpClient: HttpClient
	) { }
	// const abc = localStorage.getItem('language');
	// if(abc)
	// {
	//   return this._httpClient.get(environment.apiUrl + '/blog/recent_blog/?lang='+abc + slug + '/comment/',{params:params} );

	// }
	getAllEvents(params: any = {}) {
		if (params.hasOwnProperty('category')) {
			params = {
				...params,
				categories__slug: params["category"]
			};
		}
		var changelang = localStorage.getItem('language');
		changelang == 'IN' ? changelang = 'EN' : changelang;

		if (changelang) {
			return this._httpClient.get<EventListResponse>(environment.apiUrl + '/event/public_event/?lang=' + changelang, { params: params });

		}
		else {
			return this._httpClient.get<EventListResponse>(environment.apiUrl + '/event/public_event/?lang=');

		}
		// return this._httpClient.get<EventListResponse>(environment.apiUrl + '/event/public_event/', { params: params })
	}

	getSingleEvents(slug: string) {
		// 	const changelang = localStorage.getItem('language');

		// 	if(changelang)
		// 	{
		// 	  return this._httpClient.get<EventListResponse>(environment.apiUrl + '/event/public_event/?lang='+changelang  + slug + '/' );

		// 	}
		// else {
		// 	return this._httpClient.get<EventListResponse>(environment.apiUrl + '/event/public_event/?lang=' + slug + '/');

		// }
		return this._httpClient.get<EventListResponse>(environment.apiUrl + '/event/public_event/' + slug + '/')
	}

	getRecentEvents() {
		var changelang = localStorage.getItem('language');
		changelang == 'IN' ? changelang = 'EN' : changelang;

		if (changelang) {
			return this._httpClient.get<EventListResponse>(environment.apiUrl + '/event/recent_event/?lang=' + changelang);

		}
		else {
			return this._httpClient.get<EventListResponse>(environment.apiUrl + '/event/recent_event/?lang=');

		}
		// return this._httpClient.get<EventListResponse>(environment.apiUrl + '/event/recent_event/')
	}

	getEventCategories() {
		var changelang = localStorage.getItem('language');
		changelang == 'IN' ? changelang = 'EN' : changelang;

		if (changelang) {
			return this._httpClient.get<EventListResponse>(environment.apiUrl + '/event/event_categories/?lang=' + changelang);

		}
		else {
			return this._httpClient.get<EventListResponse>(environment.apiUrl + '/event/event_categories/?lang=');

		}
		// return this._httpClient.get<EventListResponse>(environment.apiUrl + '/event/event_categories/')
	}

	getEventsComment(slug: string, params: any) {
		return this._httpClient.get<EventListResponse>(environment.apiUrl + '/event/public_event/' + slug + '/comment/')
	}

	getBannerData() {
		if (localStorage.getItem('language') === 'EN' || localStorage.getItem('language') === 'IN') {
			return this._httpClient.get<EventListResponse>(environment.apiUrl + '/banner/banner/events/?lang=' + 'EN')
		} else {
			return this._httpClient.get<EventListResponse>(environment.apiUrl + '/banner/banner/xing-shi/?lang=' + 'JP')

		}
	}
	getseodata() {
		return this._httpClient.get<SeolistResponse>(environment.apiUrl + '/main_page_seo/main_page_seo/Events')

	}
}

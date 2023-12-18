import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
export interface Data { }

export interface Component {
  id: number;
  type: string;
  data: Data;
}

export interface Service_component {
  id: number;
  component: Component;
  order: number;
}

export interface Container_kpi {
  id: number;
  kpi: string;
  kpi_title: string;
}


export interface SingleContainerApiResponse {
  id: number;
  //   title: string;
  slug: string;
  //   list_description: string;
  icon: string;
  content: string;
  //   list_kpi_title: string;
  service_component: Service_component[];
  // Container_kpi: Container_kpi[];
}

export interface ContainerApiResponse {
  count: number;
  next: string;
  previous: string;
  results: SingleContainerApiResponse[];
}
@Injectable({
  providedIn: 'root'
})
export class ContainerApiContainer {

  constructor(
    private _http: HttpClient
  ) { }

  getAllcontainer() {
    var changelang = localStorage.getItem('language')
    changelang == 'IN' ? changelang = 'EN' : changelang;
    if (changelang) {
      return this._http.get<ContainerApiResponse>(environment.apiUrl + "/service/service_container/?lang=" + changelang);
    }
    else {
      return this._http.get<ContainerApiResponse>(environment.apiUrl + "/service/service_container/?lang=");

    }
  }

  getSingleContainer(id: string) {
    return this._http.get<SingleContainerApiResponse>(environment.apiUrl + "/service/service_container/" + id + "/");
  }



}

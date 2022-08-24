import {Injectable} from '@angular/core';
import {FacilityType} from "../model/facilityType";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = `${environment.url}`

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {

  constructor(private httpClient: HttpClient) {
  }


  getALl(): Observable<FacilityType[]> {
    return this.httpClient.get<FacilityType[]>(API_URL + '/facilityType');
  }

  findById(id: number): Observable<FacilityType> {
    return this.httpClient.get<FacilityType>(API_URL + `facilityType/${id}`);
  }
}

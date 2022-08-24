import {Injectable} from '@angular/core';
import {RentType} from "../model/rentType";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = `${environment.url}`

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<RentType[]> {
    return this.httpClient.get<RentType[]>(API_URL + '/rentType');
  }

  findById(id: number): Observable<RentType> {
    return this.httpClient.get<RentType>(API_URL + `rentType/${id}`)
  }
}

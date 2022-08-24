import {Injectable} from '@angular/core';
import {Facility} from "../model/facility";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = `${environment.url}`

@Injectable({
  providedIn: 'root'
})
export class FacilityService {


  constructor(private htttpClient : HttpClient) {
  }

  getAll(): Observable<Facility[]> {
    return this.htttpClient.get<Facility[]>(API_URL + '/facility');
  }

  save(facility: Facility): Observable<Facility> {
    return this.htttpClient.post<Facility>(API_URL + '/facility' , facility)
    // this.facilities.push(facility);
  }

  findById(id: number): Observable<Facility> {
    return this.htttpClient.get<Facility>(API_URL + `/facility/${id}`);
    // return this.facilities.find(facility => facility.id === id);

  }

  updateFacility(id: number, facility: Facility): Observable<Facility> {
    return this.htttpClient.put<Facility>(API_URL + `/facility/${id}` , facility );
    // for (let i = 0; i < this.facilities.length; i++) {
    //   if (this.facilities[i].id === id) {
    //     this.facilities[i] = facility;
    //   }
    // }
  }

  deleteFacility(id: number): Observable<Facility> {
    return this.htttpClient.delete<Facility>(API_URL + `/facility/${id}`);
    // let index = this.facilities.findIndex(element => element.id === id);
    // this.facilities.splice(index, 1);
  }
}

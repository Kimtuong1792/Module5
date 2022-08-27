import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BenhNhan} from '../model/benh-nhan';

const API_URL = `${environment.API_URL}`;

@Injectable({
  providedIn: 'root'
})
export class BenhNhanService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<BenhNhan[]> {

    return this.httpClient.get<BenhNhan[]>(API_URL + '/benhNhan');

  }

  saveCustomer(customer: BenhNhan): Observable<BenhNhan> {
    return this.httpClient.post(API_URL + '/benhNhan', customer);
  }
  findById(id: string): Observable<BenhNhan> {
    return this.httpClient.get(API_URL + `benhNhan/${id}`);
  }

}

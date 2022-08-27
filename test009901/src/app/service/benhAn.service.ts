import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BenhAn} from '../model/benh-an';

const API_URL = `${environment.API_URL}`;

@Injectable({
  providedIn: 'root'
})
export class BenhAnService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<BenhAn[]> {
    return this.http.get<BenhAn[]>(API_URL + '/benhAn');
  }
  saveSaving(saving: BenhAn): Observable<BenhAn> {
    return this.http.post<BenhAn>(API_URL + '/benhAn', saving);
  }

  findById(id: string): Observable<BenhAn> {
    return this.http.get<BenhAn>(API_URL + `/benhAn/${id}`);
  }

  updateSaving(id: string, saving: BenhAn): Observable<BenhAn> {
    return this.http.put<BenhAn>(API_URL + `/benhAn/${id}`, saving);
  }

  deleteSaving(id: string): Observable<BenhAn> {
    return this.http.delete<BenhAn>(API_URL + `/benhAn/${id}`);
  }

  find(seachs: string, searchCustomer: string): Observable<BenhAn[]> {
    return this.http.get<BenhAn[]>(API_URL + `/benhAn?id_like=` + seachs + '&benhNhan.name_like=' + searchCustomer);
  }
}

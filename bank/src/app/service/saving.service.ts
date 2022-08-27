import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Saving} from '../model/saving';

const API_URL = `${environment.API_URL}`;

@Injectable({
  providedIn: 'root'
})
export class SavingService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Saving[]> {
    return this.http.get<Saving[]>(API_URL + '/saving');
  }
  saveSaving(saving: Saving): Observable<Saving> {
    return this.http.post<Saving>(API_URL + '/saving', saving);
  }

  findById(id: number): Observable<Saving> {
    return this.http.get<Saving>(API_URL + `/saving/${id}`);
  }

  updateSaving(id: number, saving: Saving): Observable<Saving> {
    return this.http.put<Saving>(API_URL + `/saving/${id}`, saving);
  }

  deleteSaving(id: number): Observable<Saving> {
    return this.http.delete<Saving>(API_URL + `/saving/${id}`);
  }

  find(seachs: string, searchCustomer: string): Observable<Saving[]> {
    return this.http.get<Saving[]>(API_URL + `/saving?id_like=` + seachs + '&customer.name_like=' + searchCustomer);
  }
}

import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

const API_URL = `${environment.API_URL}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]> {

    return this.httpClient.get<Customer[]>(API_URL + '/customer');

  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post(API_URL + '/customer', customer);
  }
  findById(id: number): Observable<Customer>{
    return this.httpClient.get(API_URL + `customer/${id}`);
  }

}

import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerTypeService} from "./customerType.service";
import {CustomerType} from "../model/customerType";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {addParseSpanInfo} from "@angular/compiler-cli/src/ngtsc/typecheck/src/diagnostics";

const API_URL = `${environment.url}`

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [];

  constructor(private customerTypeService: CustomerTypeService,
              private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(API_URL + '/customer');
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(API_URL + '/customer', customer);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(API_URL + `/customer/${id}`);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(API_URL + `/customer/${id}`, customer)
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(API_URL + `/customer/${id}`)
  }
}


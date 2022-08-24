import {Injectable} from "@angular/core";
import {CustomerType} from "../model/customerType";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";

const API_URL = `${environment.url}`
@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<CustomerType[]> {
   return this.httpClient.get<CustomerType[]>(API_URL + '/customerType');
  }
  findById(id:number):Observable<CustomerType>{
    return this.httpClient.get(API_URL +'/customerType/'+id);
  }
}

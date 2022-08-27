import {Injectable} from "@angular/core";
import {Contract} from "../model/contract";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

const API_URL = `${environment.url}`;

@Injectable({
  providedIn: 'root'
})
export class contractService {
constructor(private httpClient : HttpClient) {
}
  getAll(): Observable<Contract[]>{
    return this.httpClient.get<Contract[]>(API_URL + '/contract');
  }

  saveContract(contracts: any): Observable<Contract> {
   return this.httpClient.post<Contract>(API_URL + '/contract' , contracts );
  }

  delete(id: number): Observable<Contract> {
    return this.httpClient.delete(API_URL + `/contract/${id}`);
  }
}

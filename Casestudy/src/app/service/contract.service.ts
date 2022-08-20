import {Injectable} from "@angular/core";
import {Contract} from "../model/contract";

@Injectable({
  providedIn: 'root'
})
export class contractService {
  contract: Contract[] = [];
  constructor() {
    this.contract.push({id:1, facility:"Villa No Beach Front", customer:"Le Thuan Dat" ,
      starDate:"2022-07-07" , endDate:"2022-07-09" ,deposit : 1000})
    this.contract.push({id:2, facility:"House Princess 01", customer:"Truong Thi Huyen" ,
      starDate:"2022-08-07" , endDate:"2022-08-09" ,deposit : 1000})
    this.contract.push({id:3, facility:"Room Twin 01", customer:"Tran Nhu Mai" ,
      starDate:"2022-08-07" , endDate:"2022-09-09" ,deposit : 1000})
    this.contract.push({id:4, facility:"Villa No Beach Front", customer:"Le Van Binh" ,
      starDate:"2022-09-07" , endDate:"2022-10-09" ,deposit : 1000})
  }
  getAll(){
    return this.contract;
  }
}

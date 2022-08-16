import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  customer: Customer[] = [];
  constructor() {
    this.customer.push({ id : 1, name : "Truong Thi Huyen" , birthday : "1997-10-17" , gender : "Female",
      idCard : "12312312" , numberPhone : "090123123" , email : "huyen@gmail.com" , address:"Quang Nam" , customerType : "normal"})
    this.customer.push({ id : 1, name : "Le Thuan Dat" , birthday : "1997-10-17" , gender : "Female",
      idCard : "12312312" , numberPhone : "090123123" , email : "dat@gmail.com" , address:"Quang Nam" , customerType : "vip"})
    this.customer.push({ id : 1, name : "Tran Nhu Mai" , birthday : "1997-10-17" , gender : "Female",
      idCard : "12312312" , numberPhone : "090123123" , email : "mai@gmail.com" , address:"Quang Nam" , customerType : "normal"})
  }

  ngOnInit(): void {
  }

}

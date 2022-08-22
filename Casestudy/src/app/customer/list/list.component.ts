import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-facilityList',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  customer: Customer[] = [];
  customerDelete: Customer | any;

  constructor(private customerService: CustomerService) {
    this.customer = this.customerService.getAll();
  }

  getCustomerDelete(temp: Customer) {
    this.customerDelete = temp;
  }

  ngOnInit(): void {

  }

  delete(id: number) {
    return this.customerService.deleteCustomer(id)
  }
}

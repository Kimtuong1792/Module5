import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerType} from "../../model/customerType";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  customerFrom: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    birthday:new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl(),
    numberPhone: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    customerType: new FormControl()
  })
  constructor(private customerService: CustomerService,
              private router: Router) { }

  ngOnInit(): void {
  }
  submit() {
    const customer = this.customerFrom.value;
    console.log(customer);
    this.customerService.saveCustomer(customer);
    this.customerFrom.reset();
    this.router.navigate(['/customer'])
  }
}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerType} from "../../model/customerType";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({});
  // id = number;
  //
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}
  //   // this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
  //   //   id = +paramMap.get('id');
  //   //   const customer = this.getCustomer(this.id);
  //   //   this.customerForm = new FormGroup({
  //   //     id: new FormControl(customer.id),
  //   //     name: new FormControl(customer.name),
  //   //     birthday: new FormControl(customer.birthday),
  //   //     gender: new FormControl(customer.gender),
  //   //     idCard: new FormControl(customer.idCard),
  //   //     numberPhone: new FormControl(customer.numberPhone),
  //   //     email: new FormControl(customer.email),
  //   //     address: new FormControl(customer.address),
  //   //     customerType: new FormControl(customer.customerType),
  //   //   });
  //   // });
  // }
  // public customersType: CustomerType[] = [];
  // compareWithId(item1: { id: any; }, item2: { id: any; }) {
  //   return item1 && item2 && item1.id == item2.id;
  // };
  // getCustomers(id: number) {
  //
  //   const {customerService} = this;
  //   return customerService.findById(id).subscribe(customer => {
  //
  //     this.customerForm = new FormGroup({
  //           id: new FormControl(customer.id),
  //           name: new FormControl(customer.name),
  //           birthday: new FormControl(customer.birthday),
  //           gender: new FormControl(customer.gender),
  //           idCard: new FormControl(customer.idCard),
  //           numberPhone: new FormControl(customer.numberPhone),
  //           email: new FormControl(customer.email),
  //           address: new FormControl(customer.address),
  //           customerType: new FormControl(customer.customerType)
  //
  //     });
  //   });
  // }
  ngOnInit(): void {
  }

  getCustomer(id: number) {
    return this.customerService.findById(id)
  }

  updateCustomer(id: number) {
    const customer = this.customerForm.value;
    this.customerService.updateCustomer(id, customer);
    this.router.navigate(['/customer'])
  }
}

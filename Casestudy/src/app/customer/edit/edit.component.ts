import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerType} from "../../model/customerType";
import {CustomerTypeService} from "../../service/customerType.service";

@Component({
  selector: 'app-editFacility',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({});
  id: number = 0;
  customerTypeList: CustomerType[] =[];

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private customerTypeService: CustomerTypeService) {
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      // @ts-ignore
      this.id = +paraMap.get('id');
      const customer = customerService.findById(this.id);
      this.customerForm = new FormGroup({
        // @ts-ignore
        id: new FormControl(customer.id),
        // @ts-ignore
        name: new FormControl(customer.name),
        // @ts-ignore
        birthday: new FormControl(customer.birthday),
        // @ts-ignore
        gender: new FormControl(customer.gender),
        // @ts-ignore
        idCard: new FormControl(customer.idCard),
        // @ts-ignore
        numberPhone: new FormControl(customer.numberPhone),
        // @ts-ignore
        email: new FormControl(customer.email),
        // @ts-ignore
        address: new FormControl(customer.address),
        // @ts-ignore
        customerType: new FormControl(customer.customerType)
      })
    });
    this.getCustomerType();
  }

  ngOnInit(): void {
  }

  getCustomer(id: number) {
    return this.customerService.findById(id)
  }

  getCustomerType() {
    return this.customerTypeList = this.customerTypeService.getAll();
  }

  updateCustomer(id: number) {
    const customer = this.customerForm.value;
    this.customerService.updateCustomer(id, customer);
    this.router.navigate(['customer/customerList'])
  }
}

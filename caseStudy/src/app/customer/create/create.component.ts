import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
    name: new FormControl('', [Validators.required , Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
      '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+' +
      '(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
      '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)' +
      '|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+')]),
    birthday:new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    idCard: new FormControl('',[Validators.required , Validators.pattern('^([0-9]{9}|[0-9]{12})$')]),
    numberPhone: new FormControl('',[Validators.required , Validators.pattern("(84|0[|8|9])+([0-9]{8})\\b")]),
    email: new FormControl('',[Validators.required , Validators.email]),
    address: new FormControl('',[Validators.required]),
    customerType: new FormControl('',[Validators.required])
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
    this.router.navigate(['/customer/customerList'])
  }
}

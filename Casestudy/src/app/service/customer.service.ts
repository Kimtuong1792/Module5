import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerTypeService} from "./customerType.service";
import {CustomerType} from "../model/customerType";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [];
  constructor(private customerTypeService: CustomerTypeService) {
    this.customers.push(
      {
        id: 1,
        name: 'Truong Ngoc Mai',
        birthday: '01/01/2000',
        gender: "Female",
        idCard: '56213789022',
        numberPhone: '15543216417',
        email: 'lan@gmail.com',
        address: 'Da Nang',
        customerType: {
          id: 1,
          name: "Diamond"
        }
      },
      {
        id: 2,
        name: 'Tran Thi Lan',
        birthday: '01/12/1998',
        gender: "Male",
        idCard: '56213789022',
        numberPhone: '15543216417',
        email: 'lan@gmail.com',
        address: 'Da Nang',
        customerType: {
          id: 1,
          name: "Diamond"
        }
      },
      {
        id: 3,
        name: 'Le Van An',
        birthday: '11/12/1995',
        gender: "Female",
        idCard: '56213789022',
        numberPhone: '15543216417',
        email: 'lan@gmail.com',
        address: 'Da Nang',
        customerType: {
          id: 1,
          name: "Diamond"
        }
      },
      {
        id: 4,
        name: 'Nguyen Van Anh',
        birthday: '09/07/1985',
        gender: "Female",
        idCard: '56213789022',
        numberPhone: '15543216417',
        email: 'lan@gmail.com',
        address: 'Da Nang',
        customerType: {
          id: 1,
          name: "Diamond"
        }
      });
  }
  customerTypeList: CustomerType[] = this.customerTypeService.getAll();

  getAll() {
    return this.customers;
  }

  saveCustomer(customer: Customer) {
    for (let i = 0; i < this.customerTypeList.length; i++) {
      if (this.customerTypeList[i].name == customer.customerType) {
        customer.customerType = this.customerTypeList[i];
      }
    }
    this.customers.push(customer);
  }

  findById(id: number) {
    return this.customers.find(customer => customer.id === id);
  }

  updateCustomer(id: number, customer: Customer) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === id) {
        this.customers[i] = customer;
      }
    }
  }
}


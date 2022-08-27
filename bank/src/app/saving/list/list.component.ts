import { Component, OnInit } from '@angular/core';
import {Saving} from '../../model/saving';
import {Customer} from '../../model/customer';
import {SavingService} from '../../service/saving.service';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  saving: Saving[] = [];
  id: number;
  searchCustomer: string;
  seachs: string;
  customer: Customer[] = [];
  p = 1;
  constructor(private savingService: SavingService,
              private customerService: CustomerService) {

  }

  ngOnInit(): void {
    this.getAll();
    this.getAllCustomer();
  }
  getAll() {
    this.savingService.getAll().subscribe(saving => {
      this.saving = saving;
    });
  }

  getAllCustomer() {
    this.customerService.getAll().subscribe(customer => {
      this.customer = customer;
    });
  }
  openDelete(id: number): void {
    this.id = id;
  }

  delete(id: number): void {
    this.savingService.deleteSaving(id).subscribe(() => {
      this.getAll();
    }, e => {
      console.log(e);
    });
  }

  search() {
    if (this.searchCustomer === undefined) {
      this.searchCustomer = '';
    }
    if (this.seachs === undefined) {
      this.seachs = '';
    }
    this.savingService.find(this.seachs, this.searchCustomer).subscribe(saving => {
      this.saving = saving;
      this.seachs = '';
    });
  }
}

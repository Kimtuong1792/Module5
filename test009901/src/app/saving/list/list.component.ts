import { Component, OnInit } from '@angular/core';
import {BenhAn} from '../../model/benh-an';
import {BenhNhan} from '../../model/benh-nhan';
import {BenhAnService} from '../../service/benhAn.service';
import {BenhNhanService} from '../../service/benhNhan.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  benhAn: BenhAn[] = [];
  id: number;
  searchCustomer: string;
  seachs: string;
  customer: BenhNhan[] = [];
  p = 1;
  benhAnDelete: BenhAn ;
  constructor(private benhAnService: BenhAnService,
              private benhNhanService: BenhNhanService) {

  }

  ngOnInit(): void {
    this.getAll();
    this.getAllCustomer();
  }
  getAll() {
    this.benhAnService.getAll().subscribe(benhAn => {
      this.benhAn = benhAn;
    });
  }

  getAllCustomer() {
    this.benhNhanService.getAll().subscribe(benhNhan => {
      this.customer = benhNhan;
    });
  }
  openDelete(item: BenhAn): void {
    this.benhAnDelete = item;
  }

  delete(id: string): void {
    this.benhAnService.deleteSaving(id).subscribe(() => {
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
    this.benhAnService.find(this.seachs, this.searchCustomer).subscribe(benhAn => {
      this.benhAn = benhAn;
      this.seachs = '';
    });
  }
}

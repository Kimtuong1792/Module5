import { Component, OnInit } from '@angular/core';
import {Contract} from "../../model/contract";
import {Facility} from "../../model/facility";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
contract:Contract[]=[];
contractDelete:Contract={};
  constructor() {

  }

  ngOnInit(): void {
  }
  getContractDelete(item: Contract) {
    this.contractDelete=item;
  }
}

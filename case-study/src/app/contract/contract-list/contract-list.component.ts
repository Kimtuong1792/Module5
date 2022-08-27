import { Component, OnInit } from '@angular/core';
import {Contract} from "../../model/contract";
import {Facility} from "../../model/facility";
import {contractService} from "../../service/contract.service";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
contract:Contract[]=[];
contractDelete:Contract |any;
  constructor(private contracService : contractService) {
this.contracService.getAll().subscribe(contracts =>{
  this.contract = contracts;
})
  }

  ngOnInit(): void {
  }
  getContractDelete(item: Contract) {
    this.contractDelete=item;
  }

  delete(id: number) {
    return this.contracService.delete(id).subscribe(()=>{this.ngOnInit()})
  }
}

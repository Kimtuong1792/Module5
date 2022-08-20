import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {contractService} from "../../service/contract.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  contractForm: FormGroup = new FormGroup({
    id: new FormControl(),
    facility: new FormControl('', [Validators.required]),
    customer: new FormControl('', [Validators.required]),
    starDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    deposit: new FormControl('', [Validators.required, Validators.pattern("^[1-9]+\\d*")]),

  })
  constructor( private contractService: contractService ,
               private router : Router) {

  }

  ngOnInit(): void {
  }
  submit() {
    const contract = this.contractForm.value;
    this.contractService.saveContract(contract);
    this.contractForm.reset();
    this.router.navigate(['/contract/contractList'])
  }
}

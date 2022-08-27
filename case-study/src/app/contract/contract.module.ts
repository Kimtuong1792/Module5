import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import {EditContractComponent} from "./edit-contract/edit-contract.component";
import {CreateContractComponent} from "./create-contract/create-contract.component";
import {ContractComponent} from "./contract.component";
import {ContractListComponent} from "./contract-list/contract-list.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EditContractComponent,
    CreateContractComponent,
    ContractComponent,
    ContractListComponent,
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContractModule { }

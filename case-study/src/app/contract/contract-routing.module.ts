import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContractComponent} from "./contract.component";
import {ContractListComponent} from "./contract-list/contract-list.component";
import {CreateContractComponent} from "./create-contract/create-contract.component";

const routes: Routes = [
  {path: '', component: ContractComponent},
  {path: 'contract/contractList', component: ContractListComponent},
  {path: 'contract/createContract', component: CreateContractComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";
import {CustomerComponent} from "./customer.component";

const routes: Routes = [
  {path: '' , component: CustomerComponent},
  {path: 'customerList' , component: ListComponent},
  {path: 'createCustomer', component: CreateComponent},
  {path: 'editCustomer/:id' , component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

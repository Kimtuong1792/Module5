import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import {FacilityComponent} from "./facility.component";
import {ContractComponent} from "../contract/contract.component";
import {FacilityListComponent} from "./facility-list/facility-list.component";
import {CreateFacilityComponent} from "./create-facility/create-facility.component";
import {EditFacilityComponent} from "./edit-facility/edit-facility.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    FacilityComponent,
    FacilityListComponent,
    CreateFacilityComponent,
    EditFacilityComponent
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    ReactiveFormsModule
  ]
})
export class FacilityModule { }

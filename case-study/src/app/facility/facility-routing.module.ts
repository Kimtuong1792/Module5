import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FacilityComponent} from "./facility.component";
import {FacilityListComponent} from "./facility-list/facility-list.component";
import {CreateFacilityComponent} from "./create-facility/create-facility.component";
import {EditFacilityComponent} from "./edit-facility/edit-facility.component";

const routes: Routes = [
  {path: '', component: FacilityComponent},
  {path: 'facilityList', component: FacilityListComponent},
  {path: 'createFacility', component: CreateFacilityComponent},
  {path: 'editFacility/:id', component: EditFacilityComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }

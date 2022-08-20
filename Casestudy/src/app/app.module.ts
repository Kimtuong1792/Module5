import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContractComponent } from './contract/contract.component';
import { CustomerComponent } from './customer/customer.component';
import { FacilityComponent } from './facility/facility.component';
import { ListComponent } from './customer/list/list.component';
import { CreateComponent } from './customer/create/create.component';
import { EditComponent } from './customer/edit/edit.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { EditContractComponent } from './contract/edit-contract/edit-contract.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import { CreateFacilityComponent } from './facility/create-facility/create-facility.component';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer/customerList' , component: ListComponent},
  {path: 'facility', component: FacilityComponent},
  {path: 'contract', component: ContractComponent},
  {path: 'facility/facilityList' , component: FacilityListComponent},
  {path:'contract/contractList', component: ContractListComponent},
  {path: 'contract/createContract', component: CreateContractComponent},
  {path: 'customer/createCustomer', component: CreateComponent},
  {path: 'customer/edit/:id' , component: EditComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContractComponent,
    CustomerComponent,
    FacilityComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    FacilityListComponent,
    ContractListComponent,
    EditContractComponent,
    CreateContractComponent,
    CreateFacilityComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        RouterModule.forRoot(routes),
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

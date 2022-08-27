import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './saving/list/list.component';
import {EditComponent} from './saving/edit/edit.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
// import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'savingEdit/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, FormsModule],
  declarations: [
    ListComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

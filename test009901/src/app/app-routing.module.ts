import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './saving/list/list.component';
import {EditComponent} from './saving/edit/edit.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

// import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [
  {path: 'benhAn', component: ListComponent},
  {path: 'benhAnEdit/:id', component: EditComponent},
  // {path: 'benhAncreate', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, FormsModule],
  declarations: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

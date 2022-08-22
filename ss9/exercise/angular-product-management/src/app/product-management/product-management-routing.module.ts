import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from '../product/product-list/product-list.component';
import {ProductCreateComponent} from '../product/product-create/product-create.component';
import {ProductEditComponent} from '../product/product-edit/product-edit.component';
import {ProductDeleteComponent} from '../product/product-delete/product-delete.component';
import {ProductManagementModule} from './product-management.module';


const routes: Routes = [
  {
    path: 'list',
    component: ProductManagementModule
  }, {
    path: 'create',
    component: ProductCreateComponent
  }, {
    path: 'edit/:id',
    component: ProductEditComponent
  }, {
    path: 'delete/:id',
    component: ProductDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }

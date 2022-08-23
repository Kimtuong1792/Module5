import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
// @ts-ignore
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    // CategoryComponent,
    // ProductComponent,
    // ProductCreateComponent,
    // ProductEditComponent,
    // ProductListComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

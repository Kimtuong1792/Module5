import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomerComponent} from './benhNhan/customer.component';
import {SavingComponent} from './saving/saving.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {EditComponent} from './saving/edit/edit.component';
import {ListComponent} from './saving/list/list.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
// import { CreateComponent } from './saving/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    SavingComponent,
    EditComponent,
    ListComponent,
    HeaderComponent,
    FooterComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProductModule} from './product/product.module';
import {CategoryModule} from './category/category.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule,
    CategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

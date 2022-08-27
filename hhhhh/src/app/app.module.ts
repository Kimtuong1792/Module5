import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FtyfuComponent } from './ftyfu/ftyfu.component';

@NgModule({
  declarations: [
    AppComponent,
    FtyfuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

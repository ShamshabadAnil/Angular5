import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayCustomersComponent } from './display-customers/display-customers.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayCustomersComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],

  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

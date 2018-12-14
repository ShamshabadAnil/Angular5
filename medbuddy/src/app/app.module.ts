import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { ShowstockComponent } from './showstock/showstock.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetStockStatusComponent } from './get-stock-status/get-stock-status.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ShowlocationComponent } from './showlocation/showlocation.component';
import { SearchhospitalComponent } from './searchhospital/searchhospital.component';
import { TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';
import { FilterPipe } from './filter.pipe';
import { HighlightDirective } from './highlight.directive';
import { CreateHeaderDirective } from './create-header.directive';
import { ManageDoctorsComponent } from './manage-doctors/manage-doctors.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    MenuComponent,
    ShowstockComponent,
    GetStockStatusComponent,
    FeedbackComponent,
    LoginComponent,
    LogoutComponent,
    ShowlocationComponent,
    SearchhospitalComponent,
    TransactionhistoryComponent,
    FilterPipe,
    HighlightDirective,
    CreateHeaderDirective,
    ManageDoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
],
  providers: [HttpClient],
  entryComponents: [ShowlocationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

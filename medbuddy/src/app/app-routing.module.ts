import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { ManageDoctorsComponent } from './manage-doctors/manage-doctors.component';
import { ShowstockComponent } from './showstock/showstock.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';
import { SearchhospitalComponent } from './searchhospital/searchhospital.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component: ContainerComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'history', component: TransactionhistoryComponent},
  {path: 'hospital', component: SearchhospitalComponent},
  {path: 'medicine', component: ShowstockComponent},
  {path: 'doctors', component: ManageDoctorsComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

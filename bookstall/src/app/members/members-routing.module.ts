import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddmembersComponent } from './addmembers/addmembers.component';
import { NotifyComponent } from './notify/notify.component';

const routes: Routes = [
  {path: 'add', component: AddmembersComponent},
  {path: 'notify', component: NotifyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { AddmembersComponent } from './addmembers/addmembers.component';
import { NotifyComponent } from './notify/notify.component';

@NgModule({
  imports: [
    CommonModule,
    MembersRoutingModule
  ],
  declarations: [AddmembersComponent, NotifyComponent]
})
export class MembersModule { }

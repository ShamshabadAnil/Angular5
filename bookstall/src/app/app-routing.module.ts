import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShowbookComponent } from './books/showbook/showbook.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'book', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'book', component: ShowbookComponent},
  {path: 'members', loadChildren: './members/members.module#MembersModule' },
  {path: '**', redirectTo: 'book'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }

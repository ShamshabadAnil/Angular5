import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowbookComponent } from './showbook/showbook.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShowbookComponent],
  exports: [ShowbookComponent]
})
export class BooksModule { }

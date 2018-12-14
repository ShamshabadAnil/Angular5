import { Component, OnInit, Input } from '@angular/core';
import { Customers } from '../customers';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() customerListChild: Customers[];
  headers: String[];
  size = 0;
  constructor() {
    this.headers = ['ID', 'NAME', 'EMAIL', 'DOB'];
   
  }

  ngOnInit() {
  }

}

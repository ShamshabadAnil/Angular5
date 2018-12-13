import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showstock',
  templateUrl: './showstock.component.html',
  styleUrls: ['./showstock.component.css']
})
export class ShowstockComponent implements OnInit {
  buttonStatus = true;
  medicineName = 'Crocin';
  qty = 50;
  currentStatus: string;
  constructor() { }

  ngOnInit() {
  }

  changeStatus() {
    this.buttonStatus = false;
    if (this.medicineName !== null) {
      this.qty = 100;
    }
  }

  update(val) {
    this.currentStatus = val;
  }
}

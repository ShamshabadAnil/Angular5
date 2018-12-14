import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-get-stock-status',
  templateUrl: './get-stock-status.component.html',
  styleUrls: ['./get-stock-status.component.css']
})
export class GetStockStatusComponent implements OnInit {

  @Input() medicinName: String;
  @Output() status: EventEmitter<String> = new EventEmitter();
  stock: Map<String, number>;
  constructor() {
    this.stock = new Map();
    this.stock.set('Crocin', 89);
    this.stock.set('Navalgin', 100);
  }

  ngOnInit() {
  }

  sendStatus() {
    const sta = this.stock.get(this.medicinName);
    if (sta !== undefined) {
      this.status.emit(sta.toString());
    } else {
      this.status.emit('Item Not available');
    }
  }
}

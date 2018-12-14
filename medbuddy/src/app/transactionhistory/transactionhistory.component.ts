import { Component, OnInit } from '@angular/core';
import { MedbuddyAPIService } from '../medbuddy-api.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transactionhistory',
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.css']
})
export class TransactionhistoryComponent implements OnInit {
  txnList: Transaction[];
  srchString: String;
  constructor(private service: MedbuddyAPIService) { }

  ngOnInit() {
    this.service.findAllTransactions().then(resp => this.txnList = resp);
  }

}

import { Component, OnInit } from '@angular/core';
import { MedbuddyAPIService } from '../medbuddy-api.service';
import { Transaction } from '../transaction';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transactionhistory',
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.css']
})
export class TransactionhistoryComponent implements OnInit {
  txnList: Transaction[];
  srchString: String;
  info = '';
  constructor(private service: MedbuddyAPIService, private active: ActivatedRoute) { }

  ngOnInit() {
    this.active.params.subscribe(pathParams => {
      const id = pathParams['txnId'];
      if (id === undefined) {
        this.info = 'Loading';
      } else {
        this.info = 'Details of Id = ' + id + 'will be loaded';
      }
    });
    this.service.findAllTransactions().then(resp => this.txnList = resp);
  }

}

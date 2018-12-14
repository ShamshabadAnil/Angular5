import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer-service.service';
import { Customers } from '../customers';

@Component({
  selector: 'app-display-customers',
  templateUrl: './display-customers.component.html',
  styleUrls: ['./display-customers.component.css']
})
export class DisplayCustomersComponent implements OnInit {

  customerList: Customers[];
  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.service.getAllCustomers().subscribe(data => this.customerList = data);
  }

}

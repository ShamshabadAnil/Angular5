import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customers } from './customers';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customers[]> {
    return this.http.get<Customers[]>('http://localhost:3000/customers');
  }
}

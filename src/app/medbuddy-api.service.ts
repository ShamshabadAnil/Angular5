import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hospitals } from './hospitals';
import { Transaction } from './transaction';
import { Doctors } from './doctors';

@Injectable({
  providedIn: 'root'
})
export class MedbuddyAPIService {

  baseURL = 'http://localhost:3000/';
  headers = new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) { }

  findAllHospitals(): Observable<Hospitals[]> {
    return this.http.get<Hospitals[]>(this.baseURL + 'hospitals');
  }

  findAllTransactions(): Promise<Transaction[]> {
    return this.http.get<Transaction[]>(this.baseURL + 'transactions').toPromise();
  }

  getDoctors(): Observable<Doctors[]> {
    return this.http.get<Doctors[]>(this.baseURL + 'doctors');
  }

  addDoctors(doctor: Doctors): Observable<Doctors> {
    return this.http.post<Doctors>(this.baseURL + 'doctors', doctor, {headers: this.headers });
  }

  updateDoctors(doctor: Doctors):  Observable<Doctors> {
    return this.http.put<Doctors>(this.baseURL + 'doctors/' + doctor.id.toString(), doctor, {headers: this.headers});
  }
  removeDoctors(doctor: Doctors): Observable<Doctors> {
    return this.http.delete<Doctors>(this.baseURL + 'doctors/' + doctor.id.toString() , {headers: this.headers});
  }
}

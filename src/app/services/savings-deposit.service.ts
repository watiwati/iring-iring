import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SavingsDepositService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('https://address-book-demo.herokuapp.com/api/contacts')
  }
  
}

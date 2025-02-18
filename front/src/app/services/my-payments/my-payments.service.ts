import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../../models/payment.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyPaymentsService {

  constructor(private http:HttpClient) { }
  
  endpointPaymentGET = "endoint"
  
  paymentsGET():Observable<Payment>{
    return this.http.get<Payment>(this.endpointPaymentGET)
  }
}
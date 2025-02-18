import { Component } from '@angular/core';
import { Payment } from '../../models/payment.model';
import { MyPaymentsService } from '../../services/my-payments/my-payments.service';

@Component({
  selector: 'app-my-payments',
  imports: [],
  standalone:true,
  templateUrl: './my-payments.component.html',
  styleUrl: './my-payments.component.css'
})
export class MyPaymentsComponent {
  constructor(private serv:MyPaymentsService){}

  payments:Payment | null = null

  ngOnInit(){
    this.getPayments()
  }

  getPayments(){
    this.serv.paymentsGET().subscribe(
      d => this.payments = d
    )
  }

}

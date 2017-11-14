import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PaymentService } from '../../../services/payment.service';
import { Payment } from '../../../models/payment';
import { Layby } from '../../../models/layby';
import { LaybyService } from '../../../services/layby.service';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {

  payment: Payment = new Payment();
  layby: Layby;

  constructor(
    private _paymentSvc: PaymentService,
    private _laybySvc: LaybyService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.payment.LaybyId = this._route.snapshot.params['id'];
    this.layby = this._laybySvc.getLayby(this.payment.LaybyId);
  }

  makePayment() {
    this._paymentSvc.makePayment(this.payment);
    this._router.navigateByUrl('/laybys');
  }

  goBack() {
    this._router.navigateByUrl('/layby-profile/' + this.payment.LaybyId);
  }

}

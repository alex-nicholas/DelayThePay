import { Component, OnInit } from '@angular/core';
import { LaybyService } from '../../services/layby.service';
import { CustomerService } from '../../services/customer.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../models/payment';
import { Layby } from '../../models/layby';

@Component({
  selector: 'dtp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  customerCount: number = 31;
  activeLaybyCount: number = 24;
  totalLaybyValue: number = 0;
  payments: Array<Payment> = [];

  constructor(
    private _customerSvc: CustomerService,
    private _laybySvc: LaybyService,
    private _paymentSvc: PaymentService
  ) { }

  ngOnInit() {
    this.customerCount = this._customerSvc.getCustomers().length;
    this.activeLaybyCount = this.getActiveLaybyCount();
    this.updateDisplay();
  }

  getActiveLaybyCount(): number {
    if (this._laybySvc.getLaybys() === undefined) return 0;
    if (this._laybySvc.getLaybys().length === 0) return 0;
    return this._laybySvc.getLaybys().filter(i => i.IsPaid === false).length;
  }

  updateDisplay() {
    this.totalLaybyValue = 0;
    this.totalLaybyValue = this._laybySvc.getTotalValue();
    this.payments = [];
    this.payments = this._paymentSvc.getPaymentHistory();
  }

}

import { Injectable } from '@angular/core';
import { LaybyService } from './layby.service';
import { Payment } from '../models/payment';
import { Layby } from '../models/layby';

@Injectable()
export class PaymentService {
    
    constructor(
        private _laybySvc: LaybyService
    ) { }
    
    makePayment(payment:Payment) {
        let layby = this._laybySvc.getLayby(payment.LaybyId);
        let valid = this.isPaymentValidForLayby(
            layby.RemainingLaybyValue, 
            payment.Amount, 
            layby.MinimumPayment
        );
        
        if (!valid) return;

        this._laybySvc.update(
            this.processPayment(
                payment, 
                layby
            )
        );
    }

    getPaymentHistory() {
        let laybys = this._laybySvc.getLaybys();
        let payments = new Array<Payment>();
        laybys.forEach((layby) => {
            layby.PaymentsMade.forEach((payment) => {
                if(payments.find(i => i.Date === payment.Date)) {
                    let match = payments.splice(payments.findIndex(i => i.Date === payment.Date), 1);
                    match[0].Amount += payment.Amount;
                } else {
                    payments.push(payment);
                }
            });
        });
        return payments;
    }

    private processPayment(payment: Payment, layby: Layby) {
        if(layby.Order.OrderTotal === layby.RemainingLaybyValue) {
            layby.RemainingLaybyValue = layby.Order.OrderTotal - payment.Amount;
        } else {
            layby.RemainingLaybyValue = layby.RemainingLaybyValue - payment.Amount;
        }
        layby.PaymentsMade.push(payment);
        layby.IsPaid = layby.RemainingLaybyValue === 0;
        return layby;
    }

    private isPaymentValidForLayby(remainingLaybyValue: number, paymentAmount: number, minimumPayment: number):boolean {
        let valid = true;

        if(paymentAmount === undefined) valid = false;
        if(paymentAmount > remainingLaybyValue) valid = false;
        if(paymentAmount < minimumPayment) {
            if(remainingLaybyValue > minimumPayment) valid = false;
        }
        if(remainingLaybyValue - paymentAmount <= 0) valid = false;

        return valid;
    }
}
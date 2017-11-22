import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LaybyService } from './layby.service';
import { Payment } from '../models/payment';
import { Layby } from '../models/layby';
import { PaymentValidator } from '../Infrastructure/validators/payment-validation.service';
import { PaymentValidationModel } from '../models/validation-models/payment-validation.model';

@Injectable()
export class PaymentService {

    constructor(
        private _laybySvc: LaybyService,
        private _paymentValidator: PaymentValidator
    ) { }
    
    makePayment(payment: Payment): PaymentValidationModel {
        const validationModel = this._paymentValidator.validate(payment);
        
        if (validationModel.valid) {
            let layby: Layby;
            this._laybySvc.getLayby(payment.LaybyId).subscribe((data) => {
                layby = data;
            });

            layby = this.processPayment(payment, layby);

            this._laybySvc.update(layby);
        }
        
        return validationModel;
    }

    getPaymentHistory(): Payment[] {
        const payments: Payment[] = [];

        this._laybySvc.getLaybys().subscribe((data) => {
            data.forEach((layby) => {
                payments.concat(layby.PaymentsMade);
            });
        });
        
        return payments;
    }

    private processPayment(payment: Payment, layby: Layby): Layby {
        if (layby.Order.OrderTotal === layby.RemainingLaybyValue) {
            layby.RemainingLaybyValue = layby.Order.OrderTotal - payment.Amount;
        } else {
            layby.RemainingLaybyValue = layby.RemainingLaybyValue - payment.Amount;
        }
        layby.IsPaid = layby.RemainingLaybyValue === 0;
        layby.PaymentsMade.push(payment);
        return layby;
    }
}

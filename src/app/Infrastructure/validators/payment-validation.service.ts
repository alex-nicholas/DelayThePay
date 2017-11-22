import { Injectable } from '@angular/core';
import { Payment } from '../../models/payment';
import { PaymentValidationModel } from '../../models/validation-models/payment-validation.model';

@Injectable()
export class PaymentValidator {
    validate(payment: Payment): PaymentValidationModel {
        const validationModel = new PaymentValidationModel();
        validationModel.payment = payment;
        validationModel.valid = true;

        if (payment.Amount === undefined || payment.Amount === 0) {
            validationModel.errors.push('Payments of $0.00 are not accepted');
            validationModel.valid = false;
        }
        if (payment.CustomerName === undefined || payment.CustomerName === '') {
            validationModel.errors.push('Payment is not attached to a Customer');
            validationModel.valid = false;
        }
        if (payment.Date === undefined) {
            validationModel.errors.push('Payment Date must be entered');
            validationModel.valid = false;
        }

        return validationModel;
    }
}

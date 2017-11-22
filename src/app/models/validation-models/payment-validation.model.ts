import { ValidationModel } from './validation.model';
import { Payment } from '../payment';

export class PaymentValidationModel extends ValidationModel {
    payment: Payment;
}

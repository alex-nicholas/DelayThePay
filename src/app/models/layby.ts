import { Payment } from './payment';
import { PaymentType, PaymentFrequency, LaybyDuration, LaybyType } from './enums';
import { LiteCustomer } from './customer';
import { Order } from './order';

export class Layby {
    Id: string;
    Customer: LiteCustomer;
    LaybyType: LaybyType;
    PaymentType: PaymentType;
    LaybyDuration: LaybyDuration;
    PaymentFrequency: PaymentFrequency;
    Order: Order = new Order();
    RemainingLaybyValue: number;
    MinimumPayment: number;
    InitialPayment: number;
    PaymentDueDates: string[] = [];
    PaymentsMade: Payment[] = [];
    IsOverdue = false;
    IsPaid = false;
    DateCreated: string;
}

import { OrderItem } from './order-item';
import { LiteCustomer } from './customer';

export class Order {
    Customer: LiteCustomer;
    OrderedItems: OrderItem[] = [];
    DiscountId: string;
    OrderDate: string;
    OrderTotal: number;
}

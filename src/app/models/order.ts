import { OrderItem } from './order-item';
import { LiteCustomer } from './customer';

export class Order {
    Customer: LiteCustomer;
    OrderedItems: OrderItem[] = [];
    OrderDate: string;
    OrderTotal: number;
}

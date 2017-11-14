import { Product } from './product';

export class OrderItem {
    constructor() {}

    ProductOrdered: Product = new Product();
    OrderedQuantity = 0;
    ItemTotal: number;
}

import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable()
export class OrderService {

  private orders: Array<Order> = [];

  constructor() { }

  createOrder(order: Order):void {
    this.orders.push(order);
  }

  getOrders(): Order[] {
    return this.orders;
  }

  getOrdersForCustomer(customerId: string): Order[] {
    return this.orders.filter(i => i.Customer.Id === customerId);
  }

  getOrdersOfProduct(productId: string): Order[] {
    return this.orders.filter(i => i.OrderedItems.find(i => i.ProductOrdered.Id === productId) !== null);
  }
}

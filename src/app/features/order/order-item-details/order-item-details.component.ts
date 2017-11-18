import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { OrderItem } from '../../../models/order-item';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-order-item-details',
  templateUrl: './order-item-details.component.html',
  styleUrls: ['./order-item-details.component.css']
})
export class OrderItemDetailsComponent implements OnInit {
  @Input() orderItem: OrderItem;
  @Input() isDisabled: boolean;
  @Output() orderedItem: EventEmitter<OrderItem>;
  products$: Observable<Array<Product>>;
  itemTotal: number = this.getTotal();

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.products$ = this._productService.getProducts();
  }

  addToOrder() {
    this.orderedItem.emit(this.orderItem);
  }

  get total() {
    return this.getTotal();
  }

  private getTotal() {
    if (!this.orderItem) return 0;
    let itemTotal = 0;
    if (this.orderItem) {
      itemTotal = (this.orderItem.ProductOrdered.ProductPrice * this.orderItem.OrderedQuantity);
    }
    this.orderItem.ItemTotal = itemTotal;
    return itemTotal;
  }
}

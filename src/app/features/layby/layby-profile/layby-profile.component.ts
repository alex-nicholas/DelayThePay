import { Component, OnInit } from '@angular/core';
import { LaybyService } from '../../../services/layby.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Layby } from '../../../models/layby';
import { LiteCustomer } from '../../../models/customer';
import { CustomerService } from '../../../services/customer.service';
import { ProductService } from '../../../services/product.service';
import { OrderItem } from '../../../models/order-item';

@Component({
  selector: 'dtp-layby-profile',
  templateUrl: './layby-profile.component.html',
  styleUrls: ['./layby-profile.component.css']
})
export class LaybyProfileComponent implements OnInit {
  id: string;
  isNew: boolean = this.id === 'New';
  selectedCustomer: LiteCustomer;
  customers: LiteCustomer[] = [];
  layby: Layby;

  get laybyTotal() {
    if (!this.layby.Order.OrderTotal) return 0;
    let totalPaymentsMade = 0;
    if (this.layby.PaymentsMade.length !== 0) {
       this.layby.PaymentsMade.forEach((payment) => {
         totalPaymentsMade += payment.Amount;
       });
    }
    return this.layby.Order.OrderTotal - totalPaymentsMade;
  }

  constructor(
    private _laybySvc: LaybyService,
    private _customerSvc: CustomerService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this._route.snapshot.params['id'];
    this.id === 'New' ? this.newLayby() : this.getLayby(this.id);
  }

  addNewOrderItem(): void {
    this.layby.Order.OrderedItems.push(new OrderItem());
  }

  save(): void {
    this.isNew ? this.create() : this.update();
  }

  delete() {
    this._laybySvc.delete(this.id);
    this.navigateToLaybys();
  }

  makePayment() {
    this._router.navigateByUrl('/make-payment/' + this.id);
  }

  navigateToLaybys() {
    this._router.navigateByUrl('/laybys');
  }

  private getLayby(id: string) {
    this.layby = this._laybySvc.getLayby(id);
  }

  private create() {
    this.layby.Customer = this.selectedCustomer;
    console.log(this.layby.Order.OrderedItems.length);
    let orderTotal = 0;
    this.layby.Order.OrderedItems.forEach((orderedItem) => {
        orderTotal += +orderedItem.ItemTotal;
    });
    this.layby.Order.OrderTotal = orderTotal;
    console.log(this.layby);
    this._laybySvc.create(this.layby);
    this.navigateToLaybys();
  }

  private update() {
    this._laybySvc.update(this.layby);
    this.navigateToLaybys();
  }

  private newLayby() {
    this.customers = this._customerSvc.getLiteCustomers();
    this.isNew = true;
    this.layby = new Layby();
  }
}

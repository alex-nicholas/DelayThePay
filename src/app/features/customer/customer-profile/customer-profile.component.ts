import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../models/customer';

@Component({
  selector: 'dtp-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  private _id: string;
  isNew: boolean;
  customer: Customer = new Customer();

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _custSvc: CustomerService
  ) { }

  ngOnInit() {
    this._id = this._route.snapshot.params['id'];
    this.isNew = this._id === 'New';
    !this.isNew ? 
      this.getCustomer() : 
      this.customer = new Customer();
  }

  getCustomer() {
    this.customer = this._custSvc.getCustomer(this._id);
  }

  save() {
    this.isNew ? this.create() : this.update();
  }

  delete() {
    this._custSvc.delete(this.customer.Id);
    this.backToCustomers();
  }

  update() {
    this._custSvc.update(this.customer);
    this.backToCustomers();
  }

  create() {
    this._custSvc.create(this.customer);
    this.backToCustomers();
  }

  private backToCustomers() {
    this._router.navigateByUrl('/customers');
  }

}

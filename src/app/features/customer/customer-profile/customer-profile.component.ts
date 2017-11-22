import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../models/customer';
import { CustomerValidator } from '../../../Infrastructure/validators/customer-validation.service';

@Component({
  selector: 'dtp-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  private _id: string;
  isNew: boolean;
  customer: Customer = new Customer();
  errors: string[];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _custSvc: CustomerService,
    private _validator: CustomerValidator
  ) { }

  ngOnInit() {
    this._id = this._route.snapshot.params['id'];
    this.isNew = this._id === 'New';
    !this.isNew ? 
      this.getCustomer() : 
      this.customer = new Customer();
  }

  getCustomer() {
    this._custSvc.getCustomer(this._id).subscribe(cust => this.customer = cust);
  }

  save() {
    this.isNew ? this.create() : this.update();
    
  }

  delete() {
    this._custSvc.delete(this.customer.Id);
    this.backToCustomers();
  }

  update(): void {
    const validated = this._custSvc.update(this.customer);
    if (validated.valid) {
      this.backToCustomers();
    } else {
      this.errors = validated.errors;
    }
  }

  create(): void {
    const validated = this._custSvc.create(this.customer);
    if (validated.valid) {
      this.backToCustomers();
    } else {
      this.errors = validated.errors;
    }
  }

  private backToCustomers() {
    this._router.navigateByUrl('/customers');
  }

}

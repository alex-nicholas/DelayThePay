import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/customer';
import { CustomerService } from '../../../services/customer.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  id = 'New';
  constructor(
    private _custSvc: CustomerService,
    private _router: Router
  ) { }
  customers$: Observable<Array<Customer>>;

  ngOnInit() {
    this.getCustomers();
  }
  
  getCustomers() {
    this.customers$ = this._custSvc.getCustomers();
  }

  viewDetails(id: string) {
    this._router.navigateByUrl('/customer-profile/' + id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer, LiteCustomer } from '../models/customer';
import { ServiceBase } from './svc-base';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerService extends ServiceBase {

  private _customers: Customer[];
  private _apiAddress = this.apiAddress + '/Contact';
  constructor(private _http: HttpClient) {
    super();
  }

  getCustomers(): Observable<Array<Customer>> {
    return this._http.get<Array<Customer>>(this._apiAddress);
  }

  getLiteCustomers(): Array<LiteCustomer> {
    const liteCustomers = new Array<LiteCustomer>();
    this._customers.forEach((customer) => {
      liteCustomers.push(new LiteCustomer(customer));
    });
    return liteCustomers;
  }

  getCustomer(id: string): Observable<Customer> {
    return this._http.get<Customer>(this._apiAddress + '/' + id);
  }

  create(customer: Customer): number {
    const newCustomer = this.setupNewCustomer(customer);

    const match = this._customers.find(i => i.EmailAddress.toLowerCase() === newCustomer.EmailAddress.toLowerCase());

    if (match === null || match === undefined) {
      this._customers.push(newCustomer);
      return 0;
    } else {
      return 1;
    }
  }

  update(customer: Customer) {
    this._customers.splice(this._customers.findIndex(i => i.Id === customer.Id), 1);
    this._customers.push(customer);
  }

  delete(id: string) {
    this._customers.splice(this._customers.findIndex(i => i.Id === id), 1);
  }

  private setupNewCustomer(customer: Customer): Customer {
    customer.LaybyIds = [];
    customer.HasBadHistory = false;

    return customer;
  }
}

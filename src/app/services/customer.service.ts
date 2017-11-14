import { Injectable } from '@angular/core';
import { Customer, LiteCustomer } from '../models/customer';

@Injectable()
export class CustomerService {

  private _customers: Customer[];

  constructor() {
    this._customers = this.initCustomers();
  }

  initCustomers(): Array<Customer> {
    return [{
      'Id': 'a',
      'Name': 'Alex Nicholas',
      'Phone': '0414 104 962',
      'Email': 'alexnicholasphoto@gmail.com',
      'LicenceNumber': 87302289,
      'Laybys': 1,
      'HasBadHistory': false
      }, {
      'Id': 'b',
      'Name': 'Tom Tilley',
      'Phone': '0411 321 654',
      'Email': 't_tillyio@gmail.com',
      'LicenceNumber': 87302290,
      'Laybys': 1,
      'HasBadHistory': false
      }, {
      'Id': 'c',
      'Name': 'Sara Speaker',
      'Phone': '0488 885 996',
      'Email': 'sez_speeks@gmail.com',
      'LicenceNumber': 87302291,
      'Laybys': 0,
      'HasBadHistory': true
      },
    ];
  }

  getCustomers(): Array<Customer> {
    return this._customers;
  }

  getLiteCustomers(): Array<LiteCustomer> {
    const liteCustomers = new Array<LiteCustomer>();
    this._customers.forEach((customer) => {
      liteCustomers.push(new LiteCustomer(customer));
    });
    return liteCustomers;
  }

  getCustomer(id: string): Customer {
    return this._customers.find(i => i.Id === id);
  }

  create(customer: Customer): number {
    const newCustomer = this.setupNewCustomer(customer);

    const match = this._customers.find(i => i.Email.toLowerCase() === newCustomer.Email.toLowerCase());

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
    customer.Id = Math.random().toString();
    customer.Laybys = 0;
    customer.HasBadHistory = false;

    return customer;
  }
}

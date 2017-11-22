import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer, LiteCustomer } from '../models/customer';
import { ServiceBase } from './svc-base';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { CustomerValidator } from '../Infrastructure/validators/customer-validation.service';
import { CustomerValidationModel } from '../models/validation-models/customer-validation.model';

@Injectable()
export class CustomerService extends ServiceBase {

  private _customers: Customer[];
  private _apiAddress = this.apiAddress + '/Contact';
  constructor(
    private _http: HttpClient,
    private _validator: CustomerValidator) {
    super();
  }

  getCustomers(): Observable<Array<Customer>> {
    return this._http.get<Array<Customer>>(this._apiAddress);
  }

  getLiteCustomers(): Array<LiteCustomer> {
    let custs: Array<Customer>;
    const liteCustomers = new Array<LiteCustomer>();
    this._http.get<Array<Customer>>(this._apiAddress)
      .subscribe((customers) => {
        custs = customers;
      });
      custs.forEach(cust => {
        liteCustomers.push(new LiteCustomer(cust));
      });
      return liteCustomers;
  }

  getCustomer(id: string): Observable<Customer> {
    return this._http.get<Customer>(this._apiAddress + '/' + id);
  }

  create(customer: Customer): CustomerValidationModel {
    const newCustomer = this.setupNewCustomer(customer);
    
    const validatedCustomer = this._validator.validate(newCustomer);

    this._http.post(
      this._apiAddress, 
      JSON.stringify(validatedCustomer.customer), 
      {headers: this.getHeaders()}
    ).subscribe();
    return validatedCustomer;
  }

  update(customer: Customer) {
    const validatedCustomer = this._validator.validate(customer);

    if (validatedCustomer.valid) {
      this._http.put(this._apiAddress, customer, {headers: this.getHeaders() }).subscribe();
    }

    return validatedCustomer;
  }

  delete(id: string) {
    const headers = this.getHeaders();
    this._http.delete(this._apiAddress + '/' + id, {headers}).subscribe();
  }

  private setupNewCustomer(customer: Customer): Customer {
    customer.LaybyIds = [];
    customer.HasBadHistory = false;

    return customer;
  }
}

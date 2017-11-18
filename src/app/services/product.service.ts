import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { ServiceBase } from './svc-base';

@Injectable()
export class ProductService extends ServiceBase {
  private _apiAddress = this.apiAddress + '/Product';
  private products: Array<Product> = [];
  constructor(private _http: HttpClient) {
      super();
   }

  getProducts(): Observable<Array<Product>> {
    return this._http.get<Array<Product>>(this._apiAddress);
  }

  getProduct(id: string): Observable<Product> {
    return this._http.get<Product>(this._apiAddress + '/' + id);
  }

  createProduct(product: Product): void {
    this.products.push(product);
  }

  updateProduct(product: Product): void {
    this.products.slice(this.products.findIndex(i => i.Id === product.Id), 1);
    this.products.push(product);
  }

  deleteProduct(id: string): void {
    this._http.delete(this._apiAddress + '/' + id);
  }
}

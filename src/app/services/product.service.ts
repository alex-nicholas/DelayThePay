import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { ServiceBase } from './svc-base';
import { ProductValidator } from '../Infrastructure/validators/product-validation.service';
import { ProductValidatonModel } from '../models/validation-models/product-validation.model';

@Injectable()
export class ProductService extends ServiceBase {
  private _apiAddress = this.apiAddress + '/Product';
  private products: Array<Product> = [];
  constructor(
    private _http: HttpClient,
    private _validator: ProductValidator
  ) {
      super();
   }

  getProducts(): Observable<Array<Product>> {
    return this._http.get<Array<Product>>(this._apiAddress);
  }

  getProduct(id: string): Observable<Product> {
    return this._http.get<Product>(this._apiAddress + '/' + id);
  }

  createProduct(product: Product): ProductValidatonModel {
    const validatedModel = this._validator.validate(product);
    
            if (validatedModel.valid) {
                this._http.post(this._apiAddress, 
                                product, 
                                {headers: this.getHeaders()})
                                .subscribe();
            }
    
            return validatedModel;
  }

  updateProduct(product: Product): ProductValidatonModel {
    const validatedModel = this._validator.validate(product);
    
            if (validatedModel.valid) {
                this._http.post(this._apiAddress, 
                                product, 
                                {headers: this.getHeaders()})
                                .subscribe();
            }
    
            return validatedModel;
  }

  deleteProduct(id: string): void {
    this._http.delete(this._apiAddress + '/' + id).subscribe();
  }
}

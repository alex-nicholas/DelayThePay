import { Injectable } from '@angular/core';
import { ServiceBase } from './svc-base';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Discount } from '../models/discount';
import { DiscountValidator } from '../Infrastructure/validators/discount-validation.service';
import { DiscountValidationModel } from '../models/validation-models/discount-validation.model';

@Injectable()
export class DiscountService extends ServiceBase {
    private _apiAddress = this.apiAddress + '/discount';
    constructor(
        private _http: HttpClient,
        private _validator: DiscountValidator
    ) {
        super();
    }

    getDiscounts(): Observable<Array<Discount>> {
        return this._http.get<Array<Discount>>(this._apiAddress);
    }

    getDiscount(id: string): Observable<Discount> {
        return this._http.get<Discount>(this._apiAddress + '/' + id);
    }

    create(discount: Discount): DiscountValidationModel {
        const validatedModel = this._validator.validate(discount);

        if (validatedModel.valid) {
            this._http.post(this._apiAddress, 
                            discount, 
                            {headers: this.getHeaders()})
                            .subscribe();
        }

        return validatedModel;
    }

    update(discount: Discount): DiscountValidationModel {
        const validatedModel = this._validator.validate(discount);
        
                if (validatedModel.valid) {
                    this._http.put(this._apiAddress + '/' + discount.Id, 
                                    discount, 
                                    {headers: this.getHeaders()})
                                    .subscribe();
                }
        
                return validatedModel;
    }

    delete(id: string): void {
        this._http.delete(this._apiAddress + '/' + id).subscribe();
    }
}

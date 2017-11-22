import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

import { Layby } from '../models/layby';
import { ServiceBase } from './svc-base';
import { LaybyValidator } from '../Infrastructure/validators/layby-validation.service';
import { LaybyValidationModel } from '../models/validation-models/layby-validation.model';

@Injectable()
export class LaybyService extends ServiceBase {

    private _laybys: Layby[] = [];
    private _apiAddress = this.apiAddress + '/Layby';
    constructor(private _http: HttpClient,
                private _validator: LaybyValidator ) {
        super();
    }

    getLaybys(): Observable<Array<Layby>> {
        return this._http.get<Array<Layby>>(this._apiAddress);
    }

    getTotalValue(): number {
        let value = 0;
        let laybys: Layby[];

        this.getLaybys().subscribe((data) => {
            laybys = data;
        });
        
        laybys.forEach((layby) => {
            value += layby.Order.OrderTotal;
        });

        return value;
    }

    getLaybysForCustomer(customerId: string): Layby[] {
        let laybysForCustomer: Layby[];
        this.getLaybys().subscribe((data) => {
            laybysForCustomer = data.filter(i => i.Customer.Id === customerId);
        });
        return laybysForCustomer;
    }

    getLayby(id: string): Observable<Layby> {
        return this._http.get<Layby>(this._apiAddress + '/' + id);
    }

    update(layby: Layby): LaybyValidationModel {
        const validatedModel = this._validator.validate(layby);
        if (validatedModel.valid) {
            this._http.put(this._apiAddress + '/' + layby.Id, 
                           layby, 
                           { headers: this.getHeaders() })
                           .subscribe();
        }
        return validatedModel;
    }

    create(layby: Layby): LaybyValidationModel {
        const validatedModel = this._validator.validate(layby);
        if (validatedModel.valid) {
            this._http.post(this._apiAddress, 
                            validatedModel.layby, 
                            {headers: this.getHeaders()})
                            .subscribe();
        }
        return validatedModel;
    }

    delete(id: string): void {
        this._http.delete(this._apiAddress + '/' + id).subscribe();
    }
}

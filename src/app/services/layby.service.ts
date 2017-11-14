import { Injectable } from '@angular/core';
import { Layby } from '../models/layby';

@Injectable()
export class LaybyService {

    private _laybys: Layby[] = [];

    constructor() {

    }

    getLaybys(): Layby[] {
        return this._laybys;
    }

    getTotalValue(): number {
        let value = 0;
        this._laybys.forEach((layby) => {
            layby.Order.OrderedItems.forEach((item) => {
                value += item.ItemTotal;
            });
        });
        return value;
    }

    getLaybysForCustomer(customerId: string): Layby[] {
        return this._laybys.filter(i => i.Customer.Id === customerId);
    }

    getLayby(id: string): Layby {
        return this._laybys.find(i => i.Id === id);
    }

    update(layby: Layby): void {
        this._laybys.splice(this._laybys.findIndex(i => i.Id === layby.Id), 1);
        this._laybys.push(layby);
    }

    create(layby: Layby): void {
        const newLayby = this.setupNewLayby(layby);
        this._laybys.push(newLayby);
    }

    delete(id:string): void {
        this._laybys.splice(this._laybys.findIndex(i => i.Id === id), 1);
    }

    private setupNewLayby(layby: Layby): Layby {
        layby.Id = Math.random().toString();
        layby.DateCreated = new Date().toDateString()
        return layby;
    }
}

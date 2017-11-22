import { Injectable } from '@angular/core';
import { Layby } from '../../models/layby';
import { LaybyValidationModel } from '../../models/validation-models/layby-validation.model';

@Injectable()
export class LaybyValidator {
    validate(layby: Layby): LaybyValidationModel {
        const laybyValidationModel = new LaybyValidationModel();
        let valid = true;

        if (layby.Customer === undefined) {
            laybyValidationModel.errors.push('Layby has no associated Customer');
            valid = false;
        }
        if (layby.Order === undefined) {
            laybyValidationModel.errors.push('Layby has no associated Order');
            valid = false;
        }
        if (layby.Order.OrderedItems.length < 1) {
            laybyValidationModel.errors.push('Order contains no items');
            valid = false;
        }
        
        laybyValidationModel.valid = valid;
        laybyValidationModel.layby = layby;
        
        return laybyValidationModel;
    }
}

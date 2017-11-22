import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { ProductValidatonModel } from '../../models/validation-models/product-validation.model';

@Injectable()
export class ProductValidator {
    validate(product: Product): ProductValidatonModel {
        const validationModel = new ProductValidatonModel();
        validationModel.valid = true;
        validationModel.product = product;
        
        if (product.Description === undefined || product.Description === '') {
            validationModel.errors.push('Product must have a Description');
            validationModel.valid = false;
        }
        if (product.ProductName === undefined || product.ProductName === '') {
            validationModel.errors.push('Product must have a Name');
            validationModel.valid = false;
        }
        if (product.ProductPrice  === undefined || product.ProductPrice === 0) {
            validationModel.errors.push('ProductPrice should not be $0.00');
            validationModel.valid = false;
        }

        return validationModel;
    }
}

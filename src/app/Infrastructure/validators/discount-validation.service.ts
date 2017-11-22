import { Injectable } from '@angular/core';
import { Discount } from '../../models/discount';
import { DiscountValidationModel } from '../../models/validation-models/discount-validation.model';

@Injectable()
export class DiscountValidator {
    validate(discount: Discount): DiscountValidationModel {
        const validationModel = new DiscountValidationModel();
        validationModel.discount = discount;

        if (discount.DiscountName === undefined || discount.DiscountName === '') {
            validationModel.valid = false;
            validationModel.errors.push('Discount must have a Name');
        }
        if (discount.DiscountPercentage === undefined || discount.DiscountPercentage === 0) {
            validationModel.valid = false;
            validationModel.errors.push('Discount Percentage must be a valid, non-zero value');
        }
        if (discount.DiscountCode === undefined || discount.DiscountCode === '') {
            validationModel.valid = false;
            validationModel.errors.push('Discount must have a Code');
        }

        return validationModel;
    }
}

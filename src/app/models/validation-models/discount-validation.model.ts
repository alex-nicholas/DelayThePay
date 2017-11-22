import { ValidationModel } from './validation.model';
import { Discount } from '../discount';

export class DiscountValidationModel extends ValidationModel {
    discount: Discount;
}

import { Injectable } from '@angular/core';
import { CustomerValidationModel } from '../../models/validation-models/customer-validation.model';
import { Customer } from '../../models/customer';

@Injectable()
export class CustomerValidator {
    validate(customer: Customer): CustomerValidationModel {
        const validationModel = new CustomerValidationModel();
        let valid = true;

        if (customer.Name === undefined || customer.Name === '') {
            validationModel.errors.push('Customer Name can not be blank');
            valid = false;
        }
        if (customer.EmailAddress === undefined || customer.EmailAddress === '') {
            validationModel.errors.push('Email Address can not be blank');
            valid = false;
        }
        if (customer.LicenceNumber === undefined || customer.LicenceNumber === '') {
            validationModel.errors.push('Licence Number can not be blank');
            valid = false;
        }
        if (customer.PhoneNumber === undefined || customer.PhoneNumber === '') {
            validationModel.errors.push('Phone Number can not be blank');
            valid = false;
        }
        
        validationModel.valid = valid;
        validationModel.customer = customer;

        return validationModel;
    } 
}

export class Customer {
    Id: string;
    Name: string;
    EmailAddress: string;
    PhoneNumber: string;
    LaybyIds: number[];
    LicenceNumber: string;
    HasBadHistory: boolean;
}

export class LiteCustomer {

    constructor(customer: Customer) {
        this.Id = customer.Id;
        this.Name = customer.Name;
        this.HasBadHistory = customer.HasBadHistory;
    }
    Id: string;
    Name: string;
    HasBadHistory: boolean;
}

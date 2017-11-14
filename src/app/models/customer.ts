export class Customer {
    Id: string;
    Name: string;
    Email: string;
    Phone: string;
    Laybys: number;
    LicenceNumber: number;
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

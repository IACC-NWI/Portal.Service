export class PurchaseOfferingModel {
    PurchaseId: string;
    MemberId: string;
    FirstName: string;
    LastName: string;
    Email: string;
    AddressLine1: string;
    AddressLine2: string;
    City: string;
    State: string;
    Zip: string;
    FestivalId: string;
    FestivalName: string;
    OfferedServiceId: string;
    OfferedServiceName: string;
    SuggestedDonation: number;
    ActualDonation: number;
    ServiceUnFormatedDate: Date;
    ServiceDate: string;
}
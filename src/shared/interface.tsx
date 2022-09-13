export interface PhoneContactInterface {
    id: string;
    isActive: boolean;
    age: number;
    name: NameContact;
    company: string;
    email: string;
    phone: string;
    address: string;
    registered: string;
}

export interface NameContact {
    first: string;
    last: string;
}

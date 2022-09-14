export type ContactInitialState = {
    contacts: Array<PhoneContactInterface>;
    errors: string | null;
    isLoading: boolean;
};

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

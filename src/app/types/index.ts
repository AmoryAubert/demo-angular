export type Article = {
  id: string;
  name: string;
  quantity: number;
  isPromo: boolean;
  unitPrice: number;
};

export type ShoppingItem = {
  id: string;
  name: string;
  quantity: number;
  isPromo: boolean;
  // Price
  unitPrice: number;
};

export interface UserPlaceholder {
  address: Address;
  company: Company;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export interface Address {
  city: string;
  geo: Geo;
  street: string;
  suite: string;
  zipcode: string;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}

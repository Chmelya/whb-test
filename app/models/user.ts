export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
}

interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
}

export class User {
    id: number;
    code: string;
    name: string;
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
    phoneNumber: string;
    email: string;


constructor (id: number = 0, 
            code: string = '',
            name: string = '',
            streetAddress: string = '',
            city: string = '',
            state: string = '',
            zipCode: string = '',
            phoneNumber: string = '',
            email: string = '',
            )
            
            {this.id=id;
            this.code=code;
            this.name=name;
            this.streetAddress=streetAddress;
            this.city=city;
            this.state=state;
            this.zipCode=zipCode;
            this.phoneNumber=phoneNumber; 
            this.email;}

        }
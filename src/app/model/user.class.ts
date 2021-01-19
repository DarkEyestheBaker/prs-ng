export class User {
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    admin: boolean;
    reviewer: boolean;

constructor (id: number = 0, 
            userName: string = '',
            password: string = '',
            firstName: string = '',
            lastName: string = '',
            phoneNumber: string = '',
            email: string = '',
            isAdmin: boolean = false,
            isReviewer: boolean = false)
            
            {this.id=id;
            this.userName=userName;
            this.password=password;
            this.firstName=firstName;
            this.lastName=lastName;
            this.phoneNumber=phoneNumber;
            this.email=email;
            this.admin=isAdmin;
            this.reviewer=isReviewer}

        }
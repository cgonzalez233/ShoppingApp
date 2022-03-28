import{IUser}from 'src/app/models/iuser'

export class User implements IUser{
    userId: number;
    email: string;
    password: string;
    address: string;
    phone: string;
    username: string;

    public constructor(username: string, password: string,
        email: string, address: string, phone: string){
            this.email = email;
            this.password = password;
            this.phone = phone;
            this.username = username;
            this.address = address;
    }

}
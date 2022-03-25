import { IOrder } from "./iorder";

export class CartOrder implements IOrder{
    orderId: number;
    itemName: string;
    itemPrice: number;
    image: string;
    status: string;
    userId: number;

    public constructor (itemName: string, itemPrice: number, image: string, userId: number){
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.image = image;
        this.userId = userId;

    }

}

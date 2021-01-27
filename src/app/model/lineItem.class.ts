import { Product } from "./product.class";
import { Request } from "./request.class";

export class LineItem {
    id: number;
    requestID: Request;
    productID: Product;
    quantity: number;

    constructor(id: number = 0, 
                requestID: Request = new Request(),
                productID: Product = new Product(),
                quantity: number = 0,)
                {
                    this.id = id;
                    this.requestID = requestID;
                    this.productID = productID;
                    this.quantity = quantity;
                }
}
        

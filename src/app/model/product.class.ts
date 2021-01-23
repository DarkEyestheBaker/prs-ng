export class Product {
    id: number;
    vendorId:number;
    partNumber: string;
    name: string;
    price: string;
    unit: string;
    photoPath: string;

    constructor(id: number = 0,
                vendorId: number = 0,
                partNumber: string = '',
                name: string = '',
                price: string = '',
                unit: string = '',
                photoPath: string = '')
                
                {
                    this.id = id;
                    this.vendorId = vendorId;
                    this.partNumber = partNumber;
                    this.name = name;
                    this.price = price;
                    this.unit = unit;
                    this.photoPath = photoPath;
                    }
                }

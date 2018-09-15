export class CarModel {
    id: number;
    model: string;
    doorNumber: number;
    transmission: string;
    numberPlate: string;
    available: boolean;
    pricePerHour: number;
    imageUrl: string;
    fuelType: string;
    seats: number;


    constructor(id: number, model: string, doorNumber: number, transmission: string, numberPlate: string, available: boolean,
                pricePerHour: number, imageUrl: string, fuelType: string, seats: number) {
        this.id = id;
        this.model = model;
        this.doorNumber = doorNumber;
        this.transmission = transmission;
        this.numberPlate = numberPlate;
        this.available = available;
        this.pricePerHour = pricePerHour;
        this.imageUrl = imageUrl;
        this.fuelType = fuelType;
        this.seats = seats;
    }
}
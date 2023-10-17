class Vehicle{
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
    }
    vehicleDetails(){
console.log(`make:${this.make}`)
console.log(`modle:${this.model}`)
console.log(`make:${this.year}`)
    }
}

class Car{
    constructor(make,model,year,doors){
        super(make,model,year);
        this.door=door;
    }
vehicleDetails(){
    super.vehicleDetails();
    console.log(`doors:${this.doors}`)
}
}

let vehicle = new Vehicle('ford','f-50',2020);

console.log('vehicledetails: ');
vehicle.vehicleDetails();

let car = new Car ('honda','accord',2023,4);

console.log('\ncarDetails: ');
car.vehicleDetails();
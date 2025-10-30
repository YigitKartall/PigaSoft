class Car{
    model = "BMW"

    write(){
        console.log(this.model);
    }
}
class Truck extends Car{
    write(){
        console.log(this.model);
    }
}

const car1 = new Car();
car1.write();
const truck1 = new Truck();
truck1.write();
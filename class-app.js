class Person{
    constructor(name,surname,age,salary){
        this.name=name;
        this.surname=surname;
        this.age=age;
        this.salary=salary;
    }
    showInfos(){
        console.log(
            `Name: ${this.name} 
            Surname: ${this.surname} 
            Age: ${this.age} 
            Salary: ${this.salary}`)
    }
}

const person1= new Person("Yigit","Kartal",22,10000);
const person2= new Person("Furkan","Sahin",22,5000);
person1.showInfos()


class Car{
    constructor(name,model,kilometer){
        this.name=name;
        this.model=model;
        this.kilometer=kilometer
    }
    showInfosCar(){
        console.log(
            `Name: ${this.name}
            Model: ${this.model}
            Kilometer: ${this.kilometer}`)
    }
}

const car1 = new Car("BMW",2023,22000);
const car2 = new Car("Mercedes",2022,33000);
car1.showInfosCar()
car2.showInfosCar()

/*class PersonAndCar{
    constructor(){
        // console.log(person1+car1);
        // console.log(person2+car2);
    }
    whoseCar(){
        console.log(person1.showInfos+car1.showInfosCar);
        console.log(person2.showInfos+car2.showInfosCar);
    }
}

const personcar1= new PersonAndCar
const personcar2 = new PersonAndCar
personcar1.whoseCar()
personcar2.whoseCar()*/
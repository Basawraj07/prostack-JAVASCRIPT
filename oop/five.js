class Person{
    constructor(name,age,country){

        this.name=name;
        this.age=age;
        this.country=country; 
    }

    details(){
        console.log(`name: ${this.name}`);
        console.log(`age: ${this.age}`);
        console.log(`country: ${this.country}`);
    }
}


let a1 = new Person("basuuu",25,"usa");
console.log(" a1 details: ");


a1.details()
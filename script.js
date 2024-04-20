// Write a “person” class to hold all the details.

class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    displayDetails(){
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}
const person1=new person('Thamizh',23);
person1.displayDetails();
// console.log(person.displayDetails())
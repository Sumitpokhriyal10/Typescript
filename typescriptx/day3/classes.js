"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //how to make function inside class 
    greet() {
        console.log(`hi ${this.name}`);
    }
}
//object create
const obj1 = new Person("rohit", 10);
const obj3 = new Person("ni", 10);
//console.log(obj1)
console.log(obj1.name);
obj1.greet();
//EXTENDS KEYWORDS
//interface human{
//name:string,
// age:number,
//}
//interface Teacher extends human{
//salary:string,
//id:number
//}
//interface bankemp extends human {
//   salary:string,
//   postion:string
//}
//const obj5:Teacher={
//  name:"rohit",
//  age:20,
//  salary:"chilar",
//  id:55
//}

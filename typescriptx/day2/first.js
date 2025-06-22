"use strict";
//type inference
let num = 10;
//num="rohit";
let x = 10;
//x="rohit";
//if we neither intialize nor assign value then we can give it any type
let money;
money = "sumit";
money = "10";
console.log(money.touppercase()); //any pe bina check kiye hiuppercase bhi lagra hai jo ki bit dangerous h
let val2;
val2 = "rohit";
val2 = 10;
if (typeof val2 === 'string')
    console.log(val2.toUpperCase());
if (typeof val2 === "number")
    console.log(val2.toFixed(2));
//how to declare array non primitive
let arr = [2, 3, 4, 5, 7, 11];
let arr1 = [2, 4, 5]; //no error cause apne input me array diya hai to wo 
//samaj gaya ki yeh array h [like let x=10; wala]
let arr2 = ['sumit', 10, 'major'];
//arr2.push(true); //error cause arr2 is only expecting num or string not boolean
let arr3 = ["sumit", 10, true];
//tuple
let tuple = ["rohit", 10];
//objects
let obj1 = {
    name: "rohit",
    age: 20,
    gender: "male"
};
//inline  [pehle variable ko pakda aur uska type bata diya]
let person;
person = {
    name: "rohit",
    age: 20,
    balance: 22222
};
let c1 = {
    name: "rohit",
    age: 20,
    id: "dfefdf"
};
let obj3 = {
    name: "rohit",
    age: 20,
    postion: 'manager',
    id: 45
};

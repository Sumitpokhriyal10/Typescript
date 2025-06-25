"use strict";
const num = 10;
const obj = {
    name: "sumit",
    age: 20,
    gender: 'male'
};
//parcel:all property become optional
//readonly:now yothere is u can only read property there is no option to write
//required:cannot leave any property all property must be mentioned 
const obj2 = {
    name: "r"
};
//obj2.name="rrr"
//array of objects
const arr = [{ name: "r", age: 20 }, { name: "m", age: 21 }];
const arr1 = [{ name: "r", age: 20 }, { name: "m", age: 20 }];
//function in ts
function greet(a) {
    console.log(a);
    return a + 5;
}
console.log(greet(10));
//multiple argument
//function meet (msg:string,val:number):void{
// console.log(msg,val);
//}
//meet("sumit",10)
function meet(msg = "jit") {
    console.log(msg);
}
//meet("rohit")
//meet();
function jee(person) {
    console.log(person || "sumit suri");
}
//jee();
//ARROW FUNCTION
const sum = (a, b) => {
    return a + b;
};
console.log(sum(2, 3));
//callback function
function placeorder(order, callback) {
    const amount = order + 10;
    callback(amount);
}
placeorder(10, (amount) => {
    console.log(amount);
});
//rest parameter
function total(...arr1) {
    let ans = 0;
    arr1.forEach((val) => ans = ans + val);
    console.log(ans);
}
total(2, 34, 5, 6, 7, 23);

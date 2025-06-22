//type inference
let num:number=10;
//num="rohit";

let x=10;
//x="rohit";

//if we neither intialize nor assign value then we can give it any type
let money:any;
money="sumit";
money="10";

console.log(money.touppercase());//any pe bina check kiye hiuppercase bhi lagra hai jo ki bit dangerous h

let val2:unknown;
val2="rohit";
val2=10;

if(typeof val2 ==='string')
console.log(val2.toUpperCase());

if(typeof val2 ==="number")
    console.log(val2.toFixed(2));

//how to declare array non primitive

let arr:Number[] =[ 2,3,4,5,7,11]

let arr1=[2,4,5]; //no error cause apne input me array diya hai to wo 
//samaj gaya ki yeh array h [like let x=10; wala]

let arr2:(string | number) []=['sumit',10,'major'];
//arr2.push(true); //error cause arr2 is only expecting num or string not boolean

let arr3:(string  | number  | boolean )[]=["sumit",10,true];

//tuple
let tuple:[string,number]=["rohit",10];


//objects
let obj1:{name:string,age:number,gender:string}={
              name:"rohit",
              age:20,
              gender:"male"
}


//inline  [pehle variable ko pakda aur uska type bata diya]
let person:{name:string;age:number;balance:Number}
person={
            name:"rohit",
              age:20,
              balance:22222
};

//similar to let n1:Number;
//n1=7;


//alias method

type customer={
    name:string,
    age:number,
    id:string
}  


let c1:customer={
    name:"rohit",
    age:20,
    id:"dfefdf"
}

//ONE MORE WAY INTERFACE

interface admin {
    name:string,
    age:number,
    postion:string
}


interface admin {
    id:number
}

let obj3:admin={
    name:"rohit",
    age:20,
    postion:'manager',
    id:45
}
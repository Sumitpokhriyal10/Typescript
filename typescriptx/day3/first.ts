const num:number=10; 


//keyword optional
interface person{
    name:string,
    age:number,
    gender:string,
    adhar?:number
}

const obj:person={
    name:"sumit",
    age:20,
    gender:'male'
}

//latest example
interface customer{
    name:string,
    age:number,
    balance:500
}


//parcel:all property become optional
//readonly:now yothere is u can only read property there is no option to write
//required:cannot leave any property all property must be mentioned 
const obj2: Partial<customer>={
    name:"r"
}

//obj2.name="rrr"

//array of objects

const arr:{name:string,age:number}[] =[{name:"r",age:20},{name:"m",age:21}]

//or by using interface
interface people {
    name:string,
    age:number
}
const arr1:people[]=[{name:"r",age:20},{name:"m",age:20}];

//function in ts

function greet(a:number):number{
    console.log(a);
    return a+5;
}

console.log(greet(10));
//multiple argument

//function meet (msg:string,val:number):void{
   // console.log(msg,val);
//}

//meet("sumit",10)

function meet(msg:string="jit"){
    console.log(msg)
}

//meet("rohit")
//meet();

function jee(person?:string){
    console.log(person || "sumit suri");
}

//jee();


//ARROW FUNCTION

const sum = (a: number, b: number): number => {
  return a + b;
}


console.log(sum(2,3));

//callback function

function placeorder(order:number,callback:(amount:number)=>void):void{
const amount:number =order +10;
callback(amount);
}

placeorder(10,(amount)=>{
    console.log(amount);
})

//rest parameter
function total(){
    
}
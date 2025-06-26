//class Person{  //CLASS IS THE BLUE PRINT OF OBJECT
// [it is inside the class that how will our object look]
  //  name:string;
   // age:number;
   // constructor(name:string,age:number){
    //    this.name=name;
    //    this.age=age;
   // }
    //how to make function inside class 
  //  greet():void{
  //      console.log(`hi ${this.name}`);
  // }
//}

//object create
//const obj1 = new Person("rohit",10);
//const obj3 = new Person("ni",10);
//console.log( typeof obj1)

//console.log(obj1.name)
//obj1.greet();


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
 //   salary1:string,
 //   postion:string
//}

//const obj5:Teacher={
  //  name:"rohit",
  //  age:20,
  //  salary:"chilar",
  //  id:55
//}


class Customer {
  public name: string;
  private age: number;
  protected balance: number;

  constructor(name: string, age: number, balance: number) {
    this.name = name;
    this.age = age;
    this.balance = balance;
  }

   public meet(): number {
    this.age = this.age + 10;
    return this.age;
  }
}

const p1 = new Customer("Deepak", 20, 500);
console.log(p1.name);       // ✅ Accessing public property
console.log(p1.meet());     // ✅ Calling method that returns updated age


class bankemployee extends Customer{
    salary:number;
    constructor(salary:number,name: string, age: number,balance: number){
        super(name,age,balance);
        this.salary=salary;
    }
    greet():void{
        console.log(this.balance);
    }
}
const E1=new bankemployee(10,"sumit",20,300);
console.log(E1);

//generics:template
function value<T>(a:T):T{
    return a;
}

value(10);

interface admin<T>{
    name:string,
    adhar:T
}

const obj80:admin<number>={
  name:"rohit",
  adhar:45
}
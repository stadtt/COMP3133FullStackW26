import FullTimeEmployee from "./FullTimeEmployee";
console.log("welcome to type script programminng");

let a:string = "hello world"; //primitive type

let c: number = 10;

let obj:String  //interface type

let d:never 
let e:object
let f:void
let g:unknown

interface Student {
    
    sid: number,
    first_name: string,
    last_Name: string,
    city: string    

}

let s1:Student = {

    sid: 1,
    first_name: "john",
    last_Name: "doe",
    city: "new york"

}

console.log(typeof s1);

//union

let x: number | string;

x = 10;
x = "hello";

//intersect


interface Person {
    
    pid: number,
    first_name: string,
    last_Name: string,
    address: string    

}

let y : Student & Person;

y = {

    sid: 1,
    first_name: "john",
    last_Name: "doe",
    city: "new york",
    pid: 2,
    address: "123 main st"
    
}
console.log(y);

let fe1 = new FullTimeEmployee(1, "john", "doe", "new york", "manager", 50000);
fe1.display();


//TYPE ALIAS
type NAME = string;

let s : NAME = "john";

type StringOrNumber = string | number;

let z : StringOrNumber;

z = 10;
z = "hello";    
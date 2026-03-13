"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FullTimeEmployee_1 = __importDefault(require("./FullTimeEmployee"));
console.log("welcome to type script programminng");
let a = "hello world"; //primitive type
let c = 10;
let obj; //interface type
let d;
let e;
let f;
let g;
let s1 = {
    sid: 1,
    first_name: "john",
    last_Name: "doe",
    city: "new york"
};
console.log(typeof s1);
//union
let x;
x = 10;
x = "hello";
let y;
y = {
    sid: 1,
    first_name: "john",
    last_Name: "doe",
    city: "new york",
    pid: 2,
    address: "123 main st"
};
console.log(y);
let fe1 = new FullTimeEmployee_1.default(1, "john", "doe", "new york", "manager", 50000);
fe1.display();
let s = "john";
let z;
z = 10;
z = "hello";

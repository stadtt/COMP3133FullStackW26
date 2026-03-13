"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("./Employee"));
class FullTimeEmployee extends Employee_1.default {
    constructor(eid, fnme, lnme, city, designation, salary) {
        super(eid, fnme, lnme, city);
        this.designation = designation;
        this.salary = salary;
    }
    display() {
        console.log(this);
    }
}
exports.default = FullTimeEmployee;

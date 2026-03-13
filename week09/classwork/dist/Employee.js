"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    //public private readonly
    //    private eid: number;
    //     private fnme: string;
    //     private lnme: string;
    //     private city: string;
    //     constructor(eid: number, fnme: string, lnme: string, city: string) {
    //         this.eid = eid;
    //         this.fnme = fnme;
    //         this.lnme = lnme;
    //         this.city = city;
    //     }
    constructor(eid, fnme, lnme, city) {
        this.eid = eid;
        this.fnme = fnme;
        this.lnme = lnme;
        this.city = city;
    }
    display() {
        console.log(`Employee ID: ${this.eid}`);
        console.log(`First Name: ${this.fnme}`);
        console.log(`Last Name: ${this.lnme}`);
        console.log(`City: ${this.city}`);
    }
}
exports.default = Employee;

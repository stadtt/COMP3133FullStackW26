import Employee from "./Employee";

export default class FullTimeEmployee extends Employee {

    designation: string ;
    salary: number;

    constructor(eid: number, fnme: string, lnme: string, city: string, designation: string, salary: number) {
        super(eid, fnme, lnme, city);
        this.designation = designation;
        this.salary = salary;
    }
    display(): void {
        console.log(this)
    }
}
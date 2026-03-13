export class Customer {
    
    private first_name: string | undefined;
    private last_name: string | undefined;
    private age: number | undefined;

    public greeter(): void {
        console.log(`Hello, ${this.first_name} ${this.last_name}`);
    }
    constructor(first_name: string, last_name: string, age: number) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
    public getAge(): number | undefined {
        return this.age;
    }

}

let customer = new Customer("John", "Smith", 30);
customer.greeter();
console.log("Age: " + customer.getAge());















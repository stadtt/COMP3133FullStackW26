export class Customer {
    
    private first_name: string | undefined;
    private last_name: string | undefined;

    public greeter(): void {
        console.log(`Hello, ${this.first_name} ${this.last_name}`);
    }
    constructor(first_name: string, last_name: string) {
        this.first_name = first_name;
        this.last_name = last_name;
    }

}

let customer = new Customer("John", "Smith");
customer.greeter();
















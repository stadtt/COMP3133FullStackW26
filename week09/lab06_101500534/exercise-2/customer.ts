class Customer {
    
    first_name: string | undefined;
    last_name: string | undefined;

    public greeter(): void {
        console.log(`Hello, ${this.first_name} ${this.last_name}`);
    }

}

let customer = new Customer();
customer.first_name = "John";
customer.last_name = "Smith";
customer.greeter();
























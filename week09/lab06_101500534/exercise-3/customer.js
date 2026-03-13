var Customer = /** @class */ (function () {
    function Customer(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello, ".concat(this.first_name, " ").concat(this.last_name));
    };
    return Customer;
}());
var customer = new Customer("John", "Smith");
customer.greeter();

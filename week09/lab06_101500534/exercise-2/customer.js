var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.greeter = function () {
        console.log("Hello, ".concat(this.first_name, " ").concat(this.last_name));
    };
    return Customer;
}());
var customer = new Customer();
customer.first_name = "John";
customer.last_name = "Smith";
customer.greeter();

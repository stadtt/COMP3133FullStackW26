"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(first_name, last_name, age) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello, ".concat(this.first_name, " ").concat(this.last_name));
    };
    Customer.prototype.getAge = function () {
        return this.age;
    };
    return Customer;
}());
exports.Customer = Customer;

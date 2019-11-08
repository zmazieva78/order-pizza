function PizzaSize(name, price) {
    this.name = name,
    this.price = price
}

function PizzaTopping(name, price) {
    this.name = name,
    this.price = price
}
var allSizes = [
    new PizzaSize("small", 5.99),
    new PizzaSize("medium", 6.99),
    new PizzaSize("large", 8.99)
    ];
var allToppings = [
    new PizzaTopping("parmesan", 0.99),
    new PizzaTopping("mozzarella", 0.99),
    new PizzaTopping("pepperoni", 1.99),
    new PizzaTopping("sausage", 1.99),
    new PizzaTopping("tomatoes", 0.99),
    new PizzaTopping("pepers", 0.99),
    new PizzaTopping("onions", 0.99),
    new PizzaTopping("mushrooms", 1.99),
    new PizzaTopping("olives", 0.99),
    new PizzaTopping("spinach", 0.99),
];

function Pizza(size, toppings) {
    this.size = size,
    this.toppings = toppings
}

Pizza.prototype.calculate = function() {
    var sum = this.size.price;
    this.toppings.forEach(topping => {
        sum += topping.price;
    });
    return sum
}
$(function() {

    













});
function PizzaSize(name, price) {
    this.name = name,
    this.price = price
}

function PizzaToppings(name, price) {
    this.name = name,
    this.price = price
}


function createAllPizzaSizes() {
    var allSizes = [
        new PizzaSize("small", 1.99),
        new PizzaSize("medium", 2.99),
        new PizzaSize("large", 3.99)
    ];

    return allSizes;
}
 
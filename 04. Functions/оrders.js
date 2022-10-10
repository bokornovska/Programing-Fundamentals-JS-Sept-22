function orders (type, amount){
    // ⦁	coffee - 1.50
    // ⦁	water - 1.00
    // ⦁	coke - 1.40
    // ⦁	snacks - 2.00
    let coffeePrice = 1.50;
    let waterPrice = 1.00;
    let cokePrice = 1.40;
    let snacksPrice = 2.00;

    let totalPrice;
    switch (type) {
        case `coffee`: totalPrice = coffeePrice*amount; break;
        case `water`: totalPrice = waterPrice*amount; break;
        case `coke`: totalPrice = cokePrice*amount; break;
        case `snacks`: totalPrice = snacksPrice*amount; break;
    }
    console.log(totalPrice.toFixed(2))

}

orders ("water", 5)
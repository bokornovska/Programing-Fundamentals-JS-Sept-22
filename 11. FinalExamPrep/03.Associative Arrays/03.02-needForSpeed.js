function needForSpeed(input) {
  let n = input.shift();
  let myObject = {};

  for (let i = 0; i < n; i++) {
    let currentLine = input.shift();
    let [car, mileage, fuel] = currentLine.split("|");
    myObject[car] = [Number(mileage), Number(fuel)];
  }

  let currentLine = input.shift();

  while (currentLine !== "Stop") {
    let [command, car, ...arguments] = currentLine.split(" : ");

    switch (command) {
      case "Drive": //"Drive : {car} : {distance} : {fuel}":
        {
          let distance = arguments[0];
          let fuel = arguments[1];

          if (myObject[car][1] < fuel) {
            console.log("Not enough fuel to make that ride");
          } else {
            myObject[car][0] += Number(distance);
            myObject[car][1] -= Number(fuel);
            console.log(
              `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
            );
          }
          if (myObject[car][0] >= 100000) {
            delete myObject[car];
            console.log(`Time to sell the ${car}!`);
          }
        }
        break;
      case "Refuel": //"Refuel : {car} : {fuel}":
        let fuel = Number(arguments[0]);
        let refill = fuel;
        myObject[car][1] += Number(fuel);

        if (myObject[car][1] > 75) {
          refill = 75 + fuel - myObject[car][1];
          myObject[car][1] = 75;
        }

        console.log(`${car} refueled with ${refill} liters`);

        break;

      case "Revert": //"Revert : {car} : {kilometers}":
        let kilometers = arguments[0];
        myObject[car][0] -= Number(kilometers);
        console.log(`${car} mileage decreased by ${kilometers} kilometers`);

        if (myObject[car][0] < 10000) {
          myObject[car][0] = 10000;
        }

        break;
    }
    currentLine = input.shift();
  }

  for (const [key, value] of Object.entries(myObject)) {
    console.log(
      `${key} -> Mileage: ${value[0]} kms, Fuel in the tank: ${value[1]} lt.`
    );
  }
}

needForSpeed([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);

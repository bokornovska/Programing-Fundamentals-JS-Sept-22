function piccolo(data) {
  let parking = new Set();

  for (let line of data) {
    let tokens = line.split(`, `);
    let command = tokens[0];
    let number = tokens[1];

    switch (command) {
      case "IN":
        parking.add(number);
        break;
      case "OUT":
        parking.delete(number);
        break;
    }
  }
  
  if(parking.size === 0){
return console.log(`Parking Lot is Empty`)
  }

  let sortParking = Array.from(parking.values()).sort()
  console.log(sortParking.join('\n'))
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);

piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);

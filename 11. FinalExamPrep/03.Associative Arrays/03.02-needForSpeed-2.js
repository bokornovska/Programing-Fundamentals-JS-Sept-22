function needForSpeed(input) {
  let numberOfCars = Number(input[0]);
  let objCars = {};

  for (let i = 1; i <= numberOfCars; i++) {
    let currentLine = input[i];
    let [model, mileage, fuel] = currentLine.split(`|`);

    objCars[model] = [mileage, fuel];
  }

  let startIndex = numberOfCars + 1;

//   console.table(objCars)

  for (let i = startIndex; i < input.length; i++) {
    let [command, model, first, second] = input[i].split(` : `);

    let currentModel = model;
    switch (command) {
      case "Drive":
        
        if(objCars.hasOwnProperty(model)){
            if(objCars[model][1]<Number(second)){
                console.log("Not enough fuel to make that ride")
            }else{
                objCars[model][1] = objCars[model][1] - Number(second);
                console.log(`${currentModel} driven for ${first} kilometers. ${second} liters of fuel consumed.`);
                
                objCars[model][0] =  Number(objCars[model][0]) + Number(first);
                
                if(objCars[model][0]>=100000){
                    console.log(`Time to sell the ${currentModel}!`)
                    delete objCars[model];
                }
            }
        }
        break;
      case "Refuel":
        
        if(objCars.hasOwnProperty(model)){
            
            if((objCars[model][1] + Number(first))>75){
                let refill = 75 - objCars[model][1];
                objCars[model][1] = 75;
                console.log(`${currentModel} refueled with ${refill} liters`)
            }else{
                refill = first;
                objCars[model][1] = objCars[model][1] + Number(first);
                console.log(`${currentModel} refueled with ${refill} liters`)
            }
        }
        break;
      case "Revert":
        if(objCars.hasOwnProperty(model)){
            objCars[model][0] = objCars[model][0] - Number(first);
            
            if(objCars[model][0]<10000){
                objCars[model][0] = 10000;
            }else{
                console.log(`${currentModel} mileage decreased by ${first} kilometers`);
            }
                };
                break;
      case "Stop":

        for (const [key, value] of Object.entries(objCars)) {
            console.log(`${key} -> Mileage: ${value[0]} kms, Fuel in the tank: ${value[1]} lt.`);
          }
        

        break;
    }
  }
}

needForSpeed([
   " 4",
   "Lamborghini Veneno|11111|74",
   "Bugatti Veyron|12345|67",
   "Koenigsegg CCXR|67890|12",
   "Aston Martin Valkryie|99900|50",
   "Drive : Koenigsegg CCXR : 382 : 82",
    "Drive : Aston Martin Valkryie : 99 : 23",
    "Drive : Aston Martin Valkryie : 2 : 1",
    "Refuel : Lamborghini Veneno : 40",
    "Revert : Bugatti Veyron : 2000",
   "Stop"
]);

function pirates(input) {
  let currentLine = input.shift();
  let objTowns = {};

  while (currentLine !== "Sail") {
    let [town, population, gold] = currentLine.split("||");

    if (!objTowns.hasOwnProperty(town)) {
      objTowns[town] = [Number(population), Number(gold)];
    } else {
      objTowns[town][0] += Number(population);
      objTowns[town][1] += Number(gold);
    }
    currentLine = input.shift();
  }
  // console.table(objTowns)
  currentLine = input.shift();

  while (currentLine !== "End") {
    let [command, town, ...arguments] = currentLine.split("=>");
    let gold;
    switch (command) {
      case "Plunder": //"Plunder=>{town}=>{people}=>{gold}"
        let people = arguments[0];
        gold = arguments[1];

        objTowns[town][0] -= Number(people);
        objTowns[town][1] -= Number(gold);

        console.log(
          `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
        );

        if (objTowns[town][0] <= 0 || objTowns[town][1] <= 0) {
          delete objTowns[town];
          console.log(`${town} has been wiped off the map!`);
        }
        break;
      case "Prosper": //"Prosper=>{town}=>{gold}"
        gold = arguments[0];

        if (gold <= 0) {
          console.log("Gold added cannot be a negative number!");
        } else {
          objTowns[town][1] += Number(gold);
          console.log(
            `${gold} gold added to the city treasury. ${town} now has ${objTowns[town][1]} gold.`
          );
        }
        break;
    }
    currentLine = input.shift();
  }

  let count = Object.keys(objTowns).length;

  if (count <= 0) {
    ("Ahoy, Captain! All targets have been plundered and destroyed!");
  } else {
    console.log(
      `Ahoy, Captain! There are ${count} wealthy settlements to go to:`
    );

    for (const kvp in objTowns) {
      console.log(
        `${kvp} -> Population: ${objTowns[kvp][0]} citizens, Gold: ${objTowns[kvp][1]} kg`
      );
    }
  }
}

pirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);

pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);

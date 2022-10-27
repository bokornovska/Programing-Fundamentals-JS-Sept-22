function manOwar(input = []) {
 
    let pirateShip = [];
    pirateShip = input.shift().split(`>`).map(Number);
    let warShip = [];
    warShip = input.shift().split(`>`).map(Number);
    let maxHealth = Number(input.shift());
    let token = input.shift();
    let isDead = false;
   
    while (token != `Retire`) {
      if (isDead === true) {
        break;
      }
      let splittedToken = token.split(` `);
      let comand = splittedToken[0];
      let indexOne = splittedToken[1];
      let indexTwo = splittedToken[2];
      let indexThree = splittedToken[3];
   
      if (comand === `Fire`) {
        fire(indexOne, indexTwo);
      } else if (comand === `Defend`) {
        defend(indexOne, indexTwo, indexThree);
      } else if (comand === `Repair`) {
        repair(indexOne, indexTwo);
      } else if (comand === `Status`) {
        status();
      }
   
      token = input.shift();
    }
   
    if (!isDead) {
      let warShipPoint = warShip.reduce((acc, el) => acc + el, 0);
      let pirateShipPoints = pirateShip.reduce((acc, el) => acc + el, 0);
   
      console.log(`Pirate ship status: ${pirateShipPoints}`);
      console.log(`Warship status: ${warShipPoint}`);
    }
   
    function fire(index, damage) {
      index = Number(index);
      damage = Number(damage);
      if (index >= 0 && index < warShip.length) {
        warShip[index] = warShip[index] - damage;
        if (warShip[index] <= 0) {
          isDead = true;
          console.log(`You won! The enemy ship has sunken.`);
          return;
        }
      }
    }
   
    function defend(startIndex, endIndex, damage) {
      startIndex = Number(startIndex);
      endIndex = Number(endIndex);
      damage = Number(damage);
      if ((startIndex >= 0 && startIndex < pirateShip.length) && (endIndex >= startIndex && endIndex <= pirateShip.length - 1)) {
        for (let i = startIndex; i <= endIndex; i++) {
          pirateShip[i] -= damage;
          if (pirateShip[i] <= 0) {
            isDead = true;
            console.log(`You lost! The pirate ship has sunken.`);
            return;
          }
        }
      }
    }
   
    function repair(index, health) {
      index = Number(index);
      health = Number(health);
      if (index >= 0 && index < pirateShip.length) {
        if (pirateShip[index] + health < maxHealth) {
          pirateShip[index] = pirateShip[index] + health;
        } else {
          pirateShip[index] = maxHealth;
        }
   
      }
    }
   
    function status() {
      let lessThan20Perc = maxHealth * 0.2;
      let coundSections = 0;
      for (let i = 0; i < pirateShip.length; i++) {
        if (pirateShip[i] < lessThan20Perc) {
          coundSections++;
        }
      }
      console.log(`${coundSections} sections need repair.`);
   
    }
   
  }

    console.log(pirateShipStatus)
    console.log(warShipStatus)
    console.log(maxHealth)
    console.log(currentLine)

    
}

manOWar (["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])
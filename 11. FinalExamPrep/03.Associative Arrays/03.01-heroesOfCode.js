function heroesOfCode(input) {
  let numbersOfHeroes = Number(input[0]);
  let myHeroesObj = {};

  for (let i = 1; i <= numbersOfHeroes; i++) {
    let currentLine = input[i];
    let [name, hp, manna] = currentLine.split(` `);
    myHeroesObj[name] = [Number(hp), Number(manna)];
  }

  for (let i = numbersOfHeroes + 1; i < input.length; i++) {
    let currentLine = input[i];
    let [command, name, first, second] = currentLine.split(` - `);

    switch (command) {
      case "CastSpell": //"CastSpell – {hero name} – {MP needed} – {spell name}"
        if (myHeroesObj[name][1] >= Number(first)) {
          myHeroesObj[name][1] = myHeroesObj[name][1] - Number(first);
          console.log(
            `${name} has successfully cast ${second} and now has ${myHeroesObj[name][1]} MP!`
          );
        } else {
          console.log(`${name} does not have enough MP to cast ${second}!`);
        }
        break;
      case "TakeDamage": //"TakeDamage – {hero name} – {damage} – {attacker}"
        myHeroesObj[name][0] = myHeroesObj[name][0] - Number(first);

        if (myHeroesObj[name][0] > 0) {
          console.log(
            `${name} was hit for ${first} HP by ${second} and now has ${myHeroesObj[name][0]} HP left!`
          );
        } else {
          console.log(`${name} has been killed by ${second}!`);
          delete myHeroesObj[name];
        }
        break;
      case "Recharge": //"Recharge – {hero name} – {amount}"
        myHeroesObj[name][1] = myHeroesObj[name][1] + Number(first);
        if (myHeroesObj[name][1] <= 200) {
          console.log(`${name} recharged for ${first} MP!`);
        } else {
          let difference = first - (myHeroesObj[name][1] - 200);
          console.log(`${name} recharged for ${difference} MP!`);
          myHeroesObj[name][1] = 200;
        }
        break;
      case "Heal": //"Heal – {hero name} – {amount}"
        myHeroesObj[name][0] = myHeroesObj[name][0] + Number(first);
        if (myHeroesObj[name][0] <= 100) {
          console.log(`${name} healed for ${first} HP!`);
        } else {
          let difference = first - (myHeroesObj[name][0] - 100);
          console.log(`${name} healed for ${difference} HP!`);
          myHeroesObj[name][0] = 100;
        }
        break;
      case "End":
        for (const [key, value] of Object.entries(myHeroesObj)) {
          console.log(`${key}`);
          console.log(` HP: ${value[0]}`);
          console.log(` MP: ${value[1]}`);
        }
        break;
    }
  }
}

heroesOfCode([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
console.log(`--------------------------`);
heroesOfCode([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);

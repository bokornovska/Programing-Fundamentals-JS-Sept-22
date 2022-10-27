function muOnline(input) {
  let health = 100;
  let bitcoins = 0;
  let roomCount = 1;

  let rooms = input.split(`|`);

  //   console.log(rooms);

  for (let i = 0; i < rooms.length; i++) {
    let commands = rooms[i].split(` `);
    // console.log(commands);

    let command = commands[0];
    let power = Number(commands[1]);

    // console.log(command);
    // console.log(Number(power));

    if (command == `potion`) {
      health += power;
      if (health > 100) {
        power = 100 - (health-power);
        health = 100;
      }
      console.log(`You healed for ${power} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (command == `chest`) {
      bitcoins += power;
      console.log(`You found ${power} bitcoins.`);
    } else if(command != `potion` && command != `chest`){
      health = health - power;
      if (health > 0) {
        console.log(`You slayed ${command}.`)
      }else{
        console.log(`You died! Killed by ${command}.`)
        console.log(`Best room: ${roomCount}`);
        break;
      }
    }
roomCount++;
  }
  if(health>0){
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
  }
}

// "potion"
// You are healed with the number in the second part. But your health cannot exceed your initial health (100).
// First print: "You healed for {amount} hp."
// After that, print your current health: "Current health: {health} hp."
// "chest"
// You've found some bitcoins, the number in the second part.
// Print: "You found {amount} bitcoins."
// In any other case, you are facing a monster, which you will fight. The second part of the room contains the attack of the monster.
// You should remove the monster's attack from your health.
// If you are not dead (health <= 0), you've slain the monster, and you should print: "You slayed {monster}."
// If you've died, print "You died! Killed by {monster}." and your quest is over.
//  Print the best room you've manage to reach: "Best room: {room}"
// If you managed to go through all the rooms in the dungeon, print on the following three lines:
// "You've made it!"
// "Bitcoins: {bitcoins}"
// "Health: {health}"

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")

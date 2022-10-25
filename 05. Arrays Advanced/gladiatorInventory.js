function gladiatorInventory(array) {
  let inventory = array.shift().split(` `);


  for (let i = 0; i < array.length; i++) {
    let commands = array.slice()[i].split(" ");
    let command = commands[0];
    let equipment = commands[1];

    switch (command) {
      case `Buy`:
        if (!inventory.includes(equipment)) {
          inventory.push(equipment);
        }
        break;
      case `Trash`:
        for (let i = 0; i < inventory.length; i++) {
          if (equipment === inventory[i]) {
            inventory.splice(i, 1);
          }
        }
        break;
      case `Repair`:
        for (let i = 0; i < inventory.length; i++) {
          if (equipment === inventory[i]) {
            let repaired = inventory.splice(i, 1);
            inventory.push(repaired.toString());
          }
        }
        break;
      case `Upgrade`:
        let item = equipment.split(`-`);
        for (let i = 0; i < inventory.length; i++) {
            if (item[0] === inventory[i]) {
                let newItem = item[0] + ":" + item[1];
                inventory.splice(i + 1, 0, newItem);
              }
        }
        break;
    }
  }
  console.log(inventory.join(" "));
}

gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);

gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])

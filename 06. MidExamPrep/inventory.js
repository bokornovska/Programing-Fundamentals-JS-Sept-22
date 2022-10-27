function inventory(input) {
  let items = input.shift().split(`, `);

//   console.log(items);

  let currentLine = input.shift();

  while (currentLine !== "Craft!") {
    let command = currentLine.split(` - `);
    let action = command[0];
    let item = command[1];
    let index = items.indexOf(item);

    switch (action) {
      case `Collect`:
        if(index<0){
            items.push(item);
        };
        break;
      case `Drop`:
        if (index >= 0) {
            items.splice(index, 1)
        }
        break;
      case `Combine Items`:
        let splitted = item.split(':');
        let oldItem = splitted[0];
        let newItem = splitted[1];
        index = items.indexOf(oldItem);
        if (index >= 0) {
            items.splice(index + 1, 0, newItem);
        }
        break;
      case `Renew`:
        if (index >= 0) {
            items.splice(index, 1);
            items.push(item);
        }
        break;
    }
     currentLine = input.shift();
  }
  console.log(items.join(", "))
 
}
inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])

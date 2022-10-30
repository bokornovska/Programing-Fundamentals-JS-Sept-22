function shoppingList(input) {

  let shoppingList = input.shift().split(`!`);
  let commands = input.slice();

  let currentLine = commands.shift();

  // go through commands until `Go Shopping`

  while (currentLine !== `Go Shopping!`) {
    let lineArgs = currentLine.split(` `);
    let command = lineArgs[0];
    let firstArgument = lineArgs[1];
    let secondArgument = lineArgs[2];

    switch (command) {

      case `Urgent`:
        if (!shoppingList.includes(firstArgument)) {
          shoppingList.unshift(firstArgument);
        }
        break;

      case `Unnecessary`:

        //   shoppingList = shoppingList.filter(x => x != firstArgument);

        let itamIndex = shoppingList.indexOf(firstArgument);
        if (itamIndex > -1) {
          shoppingList.splice(itamIndex, 1);
        };
        break;
      case `Correct`:
        let updateIndex = shoppingList.indexOf(firstArgument);

        if(updateIndex>-1){
            shoppingList[updateIndex] = secondArgument;
        };
        break;
      case `Rearrange`:
        let removeIndex = shoppingList.indexOf(firstArgument);

        if(removeIndex>-1){
            let element = shoppingList[removeIndex];
            shoppingList.splice(removeIndex,1);
            shoppingList.push(element);

        };
        break;
    }

    currentLine = commands.shift()

}
console.log(shoppingList.join(`, `))
}

shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

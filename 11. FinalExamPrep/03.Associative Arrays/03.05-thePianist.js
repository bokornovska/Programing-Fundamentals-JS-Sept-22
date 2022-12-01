function thePianist(input) {
  let n = input.shift();
  let myObject = {};

  for (let i = 0; i < n; i++) {
    let currentLine = input.shift();
    let [piece, composer, key] = currentLine.split("|");
    myObject[piece] = [composer, key];
  }

  let lines = input.shift();

  while (lines !== "Stop") {
    let [command, piece, ...arguments] = lines.split("|");

    switch (command) {
      case "Add": //"Add|{piece}|{composer}|{key}":
        let composer = arguments[0];
        let key = arguments[1];

        if (myObject.hasOwnProperty(piece)) {
          console.log(`${piece} is already in the collection!`);
        } else {
          myObject[piece] = [composer, key];
          console.log(`${piece} by ${composer} in ${key} added to the collection!`          )
        };
        break;
      case "Remove": //"Remove|{piece}":
        if(!myObject.hasOwnProperty(piece)){
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }else{
            delete myObject[piece];
            console.log(`Successfully removed ${piece}!`)
        };
        break;
      case "ChangeKey": //"ChangeKey|{piece}|{new key}":
        let newKey = arguments[0];

        if(!myObject.hasOwnProperty(piece)){
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }else{
            myObject[piece][1] = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        };
        break;
    }
    lines = input.shift();
  }
  
  for (const [key, value] of Object.entries(myObject)) {
    console.log(`${key} -> Composer: ${value[0]}, Key: ${value[1]}`)
  }
}

thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);

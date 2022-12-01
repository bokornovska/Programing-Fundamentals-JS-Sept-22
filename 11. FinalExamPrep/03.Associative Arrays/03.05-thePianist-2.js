function thePianist(input) {
  let initialPeacesCount = Number(input[0]);
  let objPeaces = {};

  for (let i = 1; i <= initialPeacesCount; i++) {
    let currentLine = input[i];
    let currentLineArray = currentLine.split(`|`);
    objPeaces[currentLineArray[0]] = [currentLineArray[1], currentLineArray[2]];
  }

//   console.table(objPeaces);

  let startIndex = 1 + initialPeacesCount;

  for (let i = startIndex; i < input.length; i++) {
    let currentLine = input[i];
    let currentLineArray = currentLine.split(`|`);
    // console.log(currentLineArray)
    let command = currentLineArray[0];
    // console.log(command)

    let piece = currentLineArray[1];
    let composer = currentLineArray[2];
    let key = currentLineArray[3];

    switch (command) {
      case "Add":
        if (objPeaces.hasOwnProperty(piece)) {
          console.log(`${piece} is already in the collection!`);
        } else {
          objPeaces[piece] = [composer, key];
          console.log(
            `${piece} by ${composer} in ${key} added to the collection!`
          );
        }
break;
      case "Remove":
        if (objPeaces.hasOwnProperty(piece)) {
          delete objPeaces[piece];
          console.log(`Successfully removed ${piece}!`)
        }else{
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
        break;
      case "ChangeKey":

      if(objPeaces.hasOwnProperty(piece)){
        objPeaces[piece][1] = composer;
        console.log(`Changed the key of ${piece} to ${composer}!`)
      }else{
        console.log(`Invalid operation! ${piece} does not exist in the collection.`)
      }
      break;
      case "Stop":
        for (const [key, value] of Object.entries(objPeaces)) {
            console.log(`${key} -> Composer: ${value[0]}, Key: ${value[1]}`);
          }
        break;
    }
  }

}

thePianist([
    "4",
   "Eine kleine Nachtmusik|Mozart|G Major",
    "La Campanella|Liszt|G# Minor",
    "The Marriage of Figaro|Mozart|G Major",
    "Hungarian Dance No.5|Brahms|G Minor",
    "Add|Spring|Vivaldi|E Major",
   "Remove|The Marriage of Figaro",
    "Remove|Turkish March",
   "ChangeKey|Spring|C Major",
    "Add|Nocturne|Chopin|C# Minor",
    "Stop"
]);

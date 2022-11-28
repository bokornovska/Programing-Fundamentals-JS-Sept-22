function activationKeys(input) {

  let [activationKey, ...instructions] = input;
//   let activationKey = input.shift();
//   let instructions = input.slice();
  let instruction = instructions.shift();

  while (instruction !== "Generate") {
    let arguments = instruction.split(">>>");
    let instructionName = arguments.shift();

    switch (instructionName) {
      case "Contains": //"Contains>>>{substring}":
        {
        let substring = arguments[0];
        if (activationKey.includes(substring)) {
          console.log(`${activationKey} contains ${substring}`);
        } else {
          console.log("Substring not found!");
        }
        break;
    }
      case "Flip": {
        //"Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}":
        let caseing = arguments[0];
        let startIndex = arguments[1];
        let endIndex = arguments[2];

        let part = activationKey.substring(startIndex, endIndex);

        if (caseing === "Upper") {
          activationKey = activationKey.replace(part, part.toUpperCase());
        } else {
          activationKey = activationKey.replace(part, part.toLowerCase());
        }
        console.log(activationKey);
        break;
      }
      case "Slice": //"Slice>>>{startIndex}>>>{endIndex}":
        {
          let startIndex = arguments[0];
          let endIndex = arguments[1];
          let substring = activationKey.substring(startIndex, endIndex);
          activationKey = activationKey.replace(substring, "");
          console.log(activationKey)
          break;
        }
    }

    instruction = instructions.shift();
  }
  console.log(`Your activation key is: ${activationKey}`);
}

activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);

console.log(`________________`);

activationKeys([
  "134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate",
]);

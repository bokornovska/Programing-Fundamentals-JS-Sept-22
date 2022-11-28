function activationKeys(input) {
  let rawKey = input.shift();

  for (let i = 0; i < input.length; i++) {
    let currentLine = input[i];
    let [command, first, second, third] = currentLine.split(">>>");

    switch (command) {
      case "Contains": //"Contains>>>{substring}":
        if (rawKey.includes(first)) {
          console.log(`${rawKey} contains ${first}`);
        } else {
          console.log("Substring not found!");
        }
        break;
      case "Flip": //"Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}":
        let text = rawKey.substring(second, third);
        if (first === "Upper") {
          rawKey = rawKey.replace(text, text.toUpperCase());
        } else {
          rawKey = rawKey.replace(text, text.toLowerCase());
        }
        console.log(rawKey);
        break;
      case "Slice": //"Slice>>>{startIndex}>>>{endIndex}":
        rawKey = rawKey.slice(0, first) + rawKey.slice(second, rawKey.length);
        console.log(rawKey);
        break;
      case "Generate":
        console.log(`Your activation key is: ${rawKey}`);
        break;
    }
  }
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

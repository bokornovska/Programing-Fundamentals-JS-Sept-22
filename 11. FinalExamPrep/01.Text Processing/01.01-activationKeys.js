function activationKeys(input) {
  let activationKey = input.shift();
  let currentLine = input.shift();

  let substring;
  let startIndex;
  let endIndex;

  while (currentLine !== "Generate") {
    let [command, ...arguments] = currentLine.split(">>>");

    switch (command) {
      case "Contains": //"Contains>>>{substring}":
        
        substring = arguments[0];
        
        if(activationKey.includes(substring)){
            console.log(`${activationKey} contains ${substring}`)
        }else{
            console.log("Substring not found!")
        };
        break;
    
      case "Flip": //"Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}":
        
        let caseing = arguments[0];
        startIndex = arguments[1];
        endIndex = arguments[2];

        substring = activationKey.slice(startIndex,endIndex);
        if(caseing === "Upper"){
            substring = substring.toUpperCase(substring);
        }else if(caseing === "Lower"){
            substring = substring.toLowerCase(substring);
        }
        activationKey = activationKey.slice(0,startIndex) + substring + activationKey.slice(endIndex);
        console.log(activationKey);
        break;
    
      case "Slice": //"Slice>>>{startIndex}>>>{endIndex}":
        
        startIndex = arguments[0];
        endIndex = arguments[1];
        substring = activationKey.slice(startIndex,endIndex);
        activationKey = activationKey.replace(substring, "");
        console.log(activationKey)
        break;
        
    }

    currentLine = input.shift();
  }

  console.log(`Your activation key is: ${activationKey}`)
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

console.log("________________");

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

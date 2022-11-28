function theImitationGames(input) {
  let message = input.shift();
  
  let currentLine = input.shift();
 
  
  while (currentLine !== "Decode") {
    let [command,...arguments] = currentLine.split("|");
    
    switch (command) {
      case "Move": //"Move {number of letters}":
        let numberOfLetters = Number(arguments[0]);
        let lettersToMove = message.slice(0,numberOfLetters);
        message = message.slice(numberOfLetters) + lettersToMove;
        break;
      case "Insert": //"Insert {index} {value}":
        let index = arguments[0];
        let value = arguments[1];
        message = message.slice(0,index) + value + message.slice(index);
        
        break;
      case "ChangeAll": //"ChangeAll {substring} {replacement}":
        let substr = arguments[0];
        let repl = arguments[1];

        while(message.includes(substr)){
            message = message.replace(substr,repl)
        }
        break;
    }

    currentLine = input.shift();
  }
  console.log(`The decrypted message is: ${message}`)
}

theImitationGames([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);

theImitationGames(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);

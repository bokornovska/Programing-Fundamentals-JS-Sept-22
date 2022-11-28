function theImitationGame(input) {
  let message = input.shift();

  for (let i = 0; i < input.length; i++) {
    let currentLine = input[i];
    let [command, first, second] = currentLine.split("|");

    switch (command) {

      case "Move": //"Move {number of letters}":
        let lettersToMove = message.slice(0,(first));
        message = message.slice(first) + lettersToMove;
        break;
      case "Insert": // "Insert {index} {value}":
        message = message.slice(0,first) + second + message.slice(first);
        break;
      case "ChangeAll": //"ChangeAll {substring} {replacement}":

        while(message.includes(first)){
            let index = message.indexOf(first);
            
            message = message.slice(0,index) + second + message.slice((index+second.length));
        };
        break;
      case "Decode":
        console.log(`The decrypted message is: ${message}`)
        break;
    }
  }
}

theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);

console.log(`__________________`);

theImitationGame([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);

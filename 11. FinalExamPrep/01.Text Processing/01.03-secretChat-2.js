function secretChat(input) {
  let message = input.shift();

  for (let i = 0; i < input.length; i++) {
    let currentLine = input[i];
    let [command, first, second] = currentLine.split(`:|:`);

    switch (command) {
      case "InsertSpace": //"InsertSpace:|:{index}":
        message = message.substring(0, first) + " " + message.substring(first);
        console.log(message);
        break;

      case "Reverse": //"Reverse:|:{substring}":
        if (!message.includes(first)) {
          console.log("error");
        } else {

          let index = message.indexOf(first);
    
          message = message.slice(0,index) + message.slice((index + first.length))


          let stringArr = first.split("");
          let reverceString = stringArr.reverse().join("");
          message = message + reverceString;
          console.log(message);
        }
        break;
      case "ChangeAll": //"ChangeAll:|:{substring}:|:{replacement}":
        message = message.split(first).join(second);
        console.log(message);
        break;
      case "Reveal":
        console.log(`You have a new text message: ${message}`);
        break;
    }
  }
}

secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);

console.log(`_____________________`);

secretChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);

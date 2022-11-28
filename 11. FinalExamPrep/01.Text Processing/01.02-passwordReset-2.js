function passwordReset(input) {
  let string = input.shift();

  for (let i = 0; i < input.length; i++) {
    let currentLine = input[i];
    let [command, first, second] = currentLine.split(` `);

    switch (command) {
      case "TakeOdd":
        let tempPassword = "";

        for (let i = 0; i < string.length; i++) {
          if (i % 2 !== 0) {
            tempPassword += string[i];
          }
        }
        string = tempPassword;
        console.log(string);
        break;
      case "Cut": //"Cut {index} {length}"
        let index = Number(first);
        let length = Number(second);
        let arr = Array.from(string).splice(index, length).join("");
        string = string.replace(arr, "");
        console.log(string);
        break;
      case "Substitute": //"Substitute {substring} {substitute}"
        let substring = first;
        let substitute = second;

        if (!string.includes(substring)) {
          console.log("Nothing to replace!");
        } else {
          while (string.includes(substring)) {
            string = string.replace(substring, substitute);
          }
          console.log(string);
        };
        break;
      case "Done":
        console.log(`Your password is: ${string}`);
        break;
    }
  }
}

passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);

console.log(`________________________`);

passwordReset([
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done",
]);

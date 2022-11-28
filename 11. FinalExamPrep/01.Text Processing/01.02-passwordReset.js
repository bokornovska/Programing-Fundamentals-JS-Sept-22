function passwordReset(input) {
  let password = input.shift();

  let currentLine = input.shift();

  while (currentLine !== "Done") {
    let [command, ...arguments] = currentLine.split(" ");

    switch (command) {
      case "TakeOdd": // "TakeOdd"
        let tempPass = "";

        for (i = 0; i < password.length; i++) {
          if (i % 2 !== 0) {
            tempPass += password[i];
          }
        }
        password = tempPass;
        console.log(password);
        break;
      case "Cut": // "Cut {index} {length}"
        let index = Number(arguments[0]);
        let length = Number(arguments[1]);
        let secondIndex = index + length;

        password = password.slice(0, index) + password.slice(secondIndex);
        console.log(password);
        break;
      case "Substitute": // "Substitute {substring} {substitute}"
        let substring = arguments[0];
        let subst = arguments[1];

      if(!password.includes(substring)){
        console.log("Nothing to replace!")
        
      }else{
        while(password.includes(substring)){
            password = password.replace(substring, subst);
        }
        console.log(password)
      }
        break;
    }
    currentLine = input.shift();
  }
  console.log(`Your password is: ${password}`)
}
// icecream::hot::summer
passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
console.log("________________________________________");
passwordReset([
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done",
]);

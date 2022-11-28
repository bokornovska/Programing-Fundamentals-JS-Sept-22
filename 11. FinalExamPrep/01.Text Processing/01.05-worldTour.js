function worldTour(input) { 
  let stops = input.shift();
  let currentLine = input.shift();

  while (currentLine !== "Travel") {
    let [command, ...arguments] = currentLine.split(":");

    switch (command) {
      case "Add Stop": //"Add Stop:{index}:{string}":
        let index = Number(arguments[0]);
        let string = arguments[1];

        if (index >= 0 && index < stops.length) {
          stops = stops.slice(0, index) + string + stops.slice(index);
        }
        console.log(stops);

        break;

      case "Remove Stop": //"Remove Stop:{start_index}:{end_index}":
        let startIndex = Number(arguments[0]);
        let endIndex = Number(arguments[1]);

        if (
          startIndex >= 0 &&
          startIndex < stops.length &&
          endIndex >= 0 &&
          endIndex < stops.length
        ) {
          stops = stops.slice(0, startIndex) + stops.slice(endIndex + 1);
        }
        console.log(stops);
        break;

      case "Switch": //"Switch:{old_string}:{new_string}":
        let oldString = arguments[0];
        let newString = arguments[1];
        
        let pattern = new RegExp(oldString, "g");

        stops = stops.replace(pattern, newString);
        
        console.log(stops);
        break;
    }

    currentLine = input.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);

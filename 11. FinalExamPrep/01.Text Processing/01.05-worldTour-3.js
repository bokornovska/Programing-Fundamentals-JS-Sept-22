function worldTour(input) {
  let initialList = input.shift();


  for (let i = 0; i < input.length; i++) {

    let inputArray = input[i].split(`:`);
    let command = inputArray.shift();
    let first = inputArray.shift();
    let second = inputArray.shift();

    switch (command) {
      case "Add Stop": //"Add Stop:{index}:{string}":
        if (Number(first) >= 0 && Number(first) < initialList.length) {
          initialList =
            initialList.slice(0, Number(first)) +
            second +
            initialList.slice(Number(first));
        }
        console.log(initialList);
        break;
      case "Remove Stop": //"Remove Stop:{start_index}:{end_index}":
        if (
          Number(first) >= 0 &&
          Number(first) < initialList.length &&
          Number(second) >= 0 &&
          Number(second) < initialList.length
        ) {
          initialList =
            initialList.slice(0, Number(first)) +
            initialList.slice(Number(second) + 1);
        }
        console.log(initialList);
        break;
      case "Switch": //"Switch:{old_string}:{new_string}":
        if (initialList.indexOf(first) >= 0) {
          initialList = initialList.replace(first, second);
        }

        console.log(initialList);
        break;
      case "Travel":
        console.log(`Ready for world tour! Planned stops: ${initialList}`);
        break;
    }
  }
}


worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);

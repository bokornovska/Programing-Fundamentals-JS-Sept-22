function race(input) {
  let racersArray = input.shift().split(`, `);
  let raceObj = {};

  const patternName = /[A-Za-z]+/gm;
  const patternDistance = /\d/g;

  let command = input.shift();

  while (command !== "end of race") {
    const currentName = command.match(patternName).join("");
    const currentDistance = command.match(patternDistance).join("");

    if (racersArray.includes(currentName)) {
      let distance = 0;

      for (const digit of currentDistance) {
        distance += Number(digit);
      }

      if (!raceObj.hasOwnProperty(currentName)) {
        raceObj[currentName] = distance;
      } else {
        raceObj[currentName] += distance;
      }
    }
    command = input.shift();
  }

  let sortedNames = Object.entries(raceObj).sort((a, b) => {
    return b[1] - a[1];
  });

  console.log(`1st place: ${sortedNames[0][0]}`);
  console.log(`2nd place: ${sortedNames[1][0]}`);
  console.log(`3rd place: ${sortedNames[2][0]}`);
}

race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);

function adAstra(input) {
  let string = input.shift();
  let pattern =
    /(\||#)(?<name>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/gm;

  let matches = pattern.exec(string);
  let totalCalories = 0;
  let arrayInfo = [];

  while (matches) {
    let name = matches.groups.name;
    let date = matches.groups.date;
    let calories = matches.groups.calories;

    totalCalories += Number(calories);

    arrayInfo.push(
      `Item: ${name}, Best before: ${date}, Nutrition: ${calories}`
    );

    matches = pattern.exec(string);
  }

  let days = Math.floor(totalCalories / 2000);

  console.log(`You have food to last you for: ${days} days!`);

  for (let line of arrayInfo) {
    console.log(line);
  }
}

adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
console.log("___________________");

adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);

console.log("___________________");

adAstra(["Hello|#Invalid food#19/03/20#450|$5*(@"]);

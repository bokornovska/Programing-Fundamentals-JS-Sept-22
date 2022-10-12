function perfectNumber(number) {
  let sumOfDevisors = 1;

  for (let currentNumber = 2; currentNumber < number; currentNumber++) {
    if (number % currentNumber === 0) {
      sumOfDevisors += currentNumber;
    }
  }

  let result = (sumOfDevisors === number) ?
  ` We have a perfect number!` : ` It's not so perfect.`
  console.log(result)
}

perfectNumber(6);

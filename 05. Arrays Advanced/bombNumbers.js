function bombNumbers(numbers, bombNumbers) {
  let bombNumber = bombNumbers[0];
  let power = bombNumbers[1];
  let finalNumbersSum = 0;

  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];

    if (currentNumber === bombNumber) {
      let startIndex = Math.max(0, i - power);
      let counts = power * 2 + 1;
      numbers.splice(startIndex, counts);
      i = i - power - 1;
    }
  }
  //   for (let j = 0; j < numbers.length; j++) {
  //     finalNumbersSum += numbers[j];
  //   }
  console.log(numbers.reduce((a, b) => a + b, 0));
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);

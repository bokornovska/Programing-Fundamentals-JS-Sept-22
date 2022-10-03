function reverseAnArrayOfNumbers(count, numbers) {
//   let resultNumbers = [];

//   for (let i = 0; i < count; i++) {
//     resultNumbers[count-1-i] = numbers[i];
//   }

//     console.log(resultNumbers.join(` `))

let resultNumbers = [];

for(let i = count-1; i>=0; i--){
    resultNumbers.push(numbers[i])
}

console.log(resultNumbers.join(` `))
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);

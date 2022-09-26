function sumDigits(number){

let numberToString = number.toString();
let sumOfDigits = 0;
let numberOfDigits = numberToString.length;

for(index=0;index<numberOfDigits;index++){
let currentDigit = Number(numberToString[index]);

sumOfDigits+=currentDigit;
}

console.log(sumOfDigits)
}

sumDigits(245678)
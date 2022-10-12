function oddAndEvenSum (number){

let oddSum = 0;
let evenSum = 0;

let numberAsString = number.toString();

for(let char of numberAsString){
    let currentNumber = Number(char);
    if(currentNumber%2 == 0){
        evenSum+=currentNumber;
    }else{
        oddSum+=currentNumber;
    }
}
console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddAndEvenSum(1000435)

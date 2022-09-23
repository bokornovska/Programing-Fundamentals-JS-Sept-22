function printAndSum(start, end){

let sum = 0;
let output = "";


for(let currentNumber = start;currentNumber<=end;currentNumber++){
    sum+=currentNumber;
    output+=`${currentNumber} `;
}
console.log(output);
console.log(`Sum: ${sum}`)
}

printAndSum(5,10);
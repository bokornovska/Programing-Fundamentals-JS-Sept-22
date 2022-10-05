function addAndSubstract(array){

    let newArray = [];
    let sum = 0;
    let newArraySum = 0;


    for(let i = 0; i<array.length;i++){

        let currentNumber = array[i];

        let odd = currentNumber - i;
        let even = currentNumber + i;


        if(currentNumber % 2 === 0){
            newArray.push(even)
        }else{
            newArray.push(odd)
        }

        sum+=currentNumber;
        newArraySum+=newArray[i];

    }
console.log(newArray);
console.log(sum);
console.log(newArraySum);
}

addAndSubstract([5, 15, 23, 56, 35])
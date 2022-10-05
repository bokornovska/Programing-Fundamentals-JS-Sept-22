function equalArrays(firstArray, secondArray){

    //Parse strings to number
for(let i = 0; i<firstArray.length; i++){
    firstArray[i] = Number(firstArray[i])
}

for(let i = 0; i<secondArray.length; i++){
    secondArray[i] = Number(secondArray[i])
}

let areEqual = true;
let sum = 0;

for(let i=0; i<firstArray.length; i++){
    if(firstArray[i] !== secondArray[i]){
        console.log( `Arrays are not identical. Found difference at ${i} index`);
        areEqual = false;
        return;
    }
    sum+=Number(firstArray[i]);
}


console.log( `Arrays are identical. Sum: ${sum}`);


}

equalArrays(['10','20','30'], ['10','20','30'])
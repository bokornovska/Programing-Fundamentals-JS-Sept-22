function firstAndLastKNumbers (array){

    let k = array.shift();

    let firstKNumbers = array.slice(0,k);
    let lastKNumbers = array.slice(-k);
    
    console.log(firstKNumbers.join(` `));
    console.log(lastKNumbers.join(` `))

}

firstAndLastKNumbers([2, 7, 8, 9])
firstAndLastKNumbers([3, 6, 7, 8, 9])
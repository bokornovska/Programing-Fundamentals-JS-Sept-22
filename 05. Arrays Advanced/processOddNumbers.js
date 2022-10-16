function processOddNumbers (numbers){

    let filteredElements = numbers.filter((el,i) => i%2 == 1);

    let multiplyedElements = filteredElements.map(x => x*2);

    let revercedNumbers = multiplyedElements.reverse();

    console.log(revercedNumbers.join(` `));

}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3])
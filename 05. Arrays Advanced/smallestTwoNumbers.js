function smallestTwoNumbers (array){

    let sortedNumbers = array.sort((a,b) => {
        return a-b;
    });

    let newArray = sortedNumbers.slice(0,2);
    console.log(newArray.join(` `))
    

}

smallestTwoNumbers([30, 15, 50, 5])
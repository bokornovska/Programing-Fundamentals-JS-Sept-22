function sorting(array){

    let resultArray = [];
    let sortedArray = array.sort((a,b) =>{
        return a-b;
    })


    while(sortedArray.length !== 0){
        resultArray.push(sortedArray[sortedArray.length-1]) && array.pop();
        resultArray.push(sortedArray[0]) && sortedArray.shift();
      }
console.log(resultArray.join(` `))
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
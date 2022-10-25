function distinctArray (array){

    let resultArray = [];

    for(let i = 0;i<array.length; i++){

        if(!resultArray.includes(array[i])){
            resultArray.push(array[i])
        }
    }
console.log(resultArray.join(` `))
}

// let uniqueNumbers = new Set(array);




distinctArray([1, 2, 3, 4])
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])

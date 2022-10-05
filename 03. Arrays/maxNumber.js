function maxNumber(array){

    let resultArray = [];
    

    for(let i = 0; i<array.length;i++){
        
        isTop = true;
        let currentNumber = array[i];

        for(let j = i+1; j<array.length;j++){
            if(currentNumber<=array[j]){
                isTop = false;
            }
        }
        if(isTop){
            resultArray.push(array[i])
        }
    }
console.log(resultArray.join(` `))
}

maxNumber([1, 4, 3, 2])
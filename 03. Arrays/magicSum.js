function magicSum(array, magicNum){
    let sum = 0;
    for(let i=0;i<array.length;i++){
       for(let j = i+1;j<array.length;j++){
        let currentSum = array[i] + array[j];
        if(currentSum === magicNum){
            console.log(`${array[i]} ${array[j]}`)
        }
       }

    }

}

magicSum([1, 7, 6, 2, 19, 23], 8)
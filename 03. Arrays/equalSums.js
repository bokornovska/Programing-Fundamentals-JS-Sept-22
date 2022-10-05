function equalSums(arr){

let foundIndex = `no`;
let arrayLength = arr.length;

for(let i = 0; i<arrayLength;i++){

    let leftSum = 0;
    let rightSum = 0;

    for(let l = 0;l<i;l++){

        leftSum +=arr[l]
    }
    for(let r = i+1;r<arrayLength;r++){
        rightSum+=arr[r];
    }

    if(leftSum==rightSum){
        foundIndex = i;
    }
}
console.log(foundIndex)
}

equalSums([1])
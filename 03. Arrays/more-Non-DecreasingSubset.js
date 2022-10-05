function nonDecreasing(numbers){

    let max = numbers[0];
    result = []
    result.push(max);

    for(let i = 1;i<numbers.length;i++){

        if(numbers[i]>=max){
            max = numbers[i]
            result.push(max);  
        }

    }
console.log(result.join(` `))
}

nonDecreasing([ 1, 3, 8, 4, 10, 12, 3, 2, 24])
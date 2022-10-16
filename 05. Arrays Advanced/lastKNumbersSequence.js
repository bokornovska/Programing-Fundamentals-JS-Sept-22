function lastKNumbersSequence (n, k){

    let result = [1];

    for(i=0;i<n-1;i++){
        let secuenceK = result.slice(-k);
        let sum = 0;

        for(let el of secuenceK){
            sum+=el;
        }
        result.push(sum);
    }

    console.log(result.join(` `))


}

lastKNumbersSequence(6,3);
lastKNumbersSequence(8,2);
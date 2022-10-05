function printN (array){
    // removing the last element
    let step = array.pop();
    let resultArray = [];

    for (let i = 0; i<array.length;i++) {
        if (i % step === 0) {
            resultArray.push(array[i]);
        }
    }
    console.log(resultArray.join(' '));
   
   
}

printN(['5', '20', '31', '4', '20', '2'])
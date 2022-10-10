function signCheck (numOne, numTwo, numThree) {
    
    let result = '';
    if (numOne == 0 || numTwo == 0 || numThree == 0) {
        result = 'Positive';
    } else if (numOne > 0 && numTwo > 0 && numThree > 0) {
        result = 'Positive';
    } else if (numOne > 0 && numTwo > 0 && numThree < 0) {
        result = 'Negative';
    } else if (numOne > 0 && numTwo < 0 && numThree > 0) {
        result = 'Negative';
    } else if (numOne > 0 && numTwo < 0 && numThree < 0) {
        result = 'Positive';
    } else if (numOne < 0 && numTwo > 0 && numThree > 0) {
        result = 'Negative';
    } else if (numOne < 0 && numTwo > 0 && numThree < 0) {
        result = 'Positive';
    } else if (numOne < 0 && numTwo < 0 && numThree > 0) {
        result = 'Positive';
    } else if (numOne < 0 && numTwo < 0 && numThree < 0) {
        result = 'Negative';
    }
    console.log(result);

    // function wrongResult(...nums) {
    //     recursiveSign(nums);
    //     function recursiveSign(nums, sign = 'Positive') {
    //         if (nums.length === 0 ) {
    //             console.log(sign);
    //             return;
    //         }
    //         let num = nums.pop();
    //         if (num === 0 ) {
    //             console.log('Positive');
    //             return;
    //         }
    //         if ((sign === 'Positive' && num > 0) || (sign === 'Negative' && num < 0)) {
    //             recursiveSign(nums, 'Positive');
    //         } else {
    //             recursiveSign(nums, 'Negative');
    //         }
    //     }
    // }
}

signCheck( 5,  12,   -15)
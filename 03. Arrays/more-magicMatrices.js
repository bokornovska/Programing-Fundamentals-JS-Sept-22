function magicMatrices (input){

    let isMagic = true;
        for (let i = 0; i < input.length - 1; i++) {
            let sumROne = input[i].reduce((a, b) => a + b, 0);
            let sumRTwo = input[i + 1].reduce((a, b) => a + b, 0);
            let sumCOne = 0;
            let sumCTwo = 0;
    
            for (let j = 0; j < input.length; j++) {
                sumCOne += input[i][j];
                sumCTwo += input[i + 1][j];
            }
    
            if (sumROne !== sumRTwo || sumCOne !== sumCTwo) {
                
                isMagic = false;
            }

        }
    
console.log(isMagic)
    }

magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])
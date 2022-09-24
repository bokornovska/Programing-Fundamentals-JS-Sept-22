function amazingNumbers(number){

    let textNumber = number.toString();
    let sum = 0;
    let isAmazing = false;

    for(let i=0; i<textNumber.length;i++){
        let currentDidgit = textNumber[i];

        let currentNumber = Number(currentDidgit);
        sum+=currentNumber
    }

    let sumText = sum.toString();

    for(let i=0; i<sumText.length;i++){
        let currentDidgit = sumText[i];
        if(currentDidgit == '9'){
            isAmazing = true;
            break;
        }
    }

   
        console.log(`${number} Amazing? ${isAmazing ? 'True' : 'False'}`)
   


}

amazingNumbers(133)
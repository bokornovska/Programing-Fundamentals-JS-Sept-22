function specialNumbers(number) {
//   let isSpecial = true;

//   for (let i = 0; i <= number; i++) {
//     let sumOfDigits = 0;
//     let numberToString = i.toString();

//     for (let j = 0; j < numberToString.length; j++) {
//       if (i <= 10) {
//         sumOfDigits += Number(numberToString[j]);
//       } else {
//         sumOfDigits += Number([i]);
//       }
           
//     }

//     if (sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11) {
//         isSpecial = true;
//       } else {
//         isSpecial = false;
//       }

//       if (isSpecial) {
//         console.log(`${number} -> False`);
//       } else {
//         console.log(`${number} -> True`);
//       }
//   }

  let sum = 0;
  let result = "";

  for(let i=1;i<=number;i++){

      i = i.toString();

      for(let j=0;j<i.length;j++){
          sum+=Number(i[j])
      }

      result =
      sum === 5 || sum === 7 || sum === 11;

  console.log(result ? `${i} -> True` : `${i} -> False`);
  sum=0;
  }
}

specialNumbers(15);

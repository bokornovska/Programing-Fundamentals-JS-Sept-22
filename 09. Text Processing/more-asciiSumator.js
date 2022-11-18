function asciiSumator(input) {
  let startIndex = input[0].charCodeAt(0);
  // console.log(startIndex)

  let endIndex = input[1].charCodeAt(0);
  // console.log(endIndex);

  let text = input[2];
  // console.log(text)

  let textArr = text.split(``);
  // console.log(textArr);

  let resultArr = [];

  for (let i = 0; i < textArr.length; i++) {
    if (startIndex < endIndex) {
      if (textArr[i].charCodeAt() > startIndex && textArr[i].charCodeAt() < endIndex) {
        resultArr.push(textArr[i]);
      }
    }else if(endIndex<startIndex){
        if (textArr[i].charCodeAt() < startIndex && textArr[i].charCodeAt() > endIndex) {
            resultArr.push(textArr[i]);
          }
    }
  }

  // console.log(resultArr);

  let result = 0;
  for (let i = 0; i < resultArr.length; i++) {
    result += resultArr[i].charCodeAt();
  }

  console.log(result);
}

asciiSumator(["a", "1", "jfe392$#@j24ui9ne#@$"]);

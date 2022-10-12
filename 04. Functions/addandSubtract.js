function addAndSubtract(first, second, third){

    let sumFirstandSecond = add(first, second);
    let finalResult = sumFirstandSecond-third
    console.log(finalResult)

    function add(first, second){
        return first+second;
    }

    function subtract(sumFirstandSecond, thirdNumber){
        return sumFirstandSecond-thirdNumber;
    }

}

addAndSubtract (23,    6,    10)


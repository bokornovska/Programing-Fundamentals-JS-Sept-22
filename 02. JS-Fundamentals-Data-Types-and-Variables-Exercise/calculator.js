function calculator(firstnumber, operator, secondNumber){

let result = 0;

if(operator === `+`){
    result = firstnumber+secondNumber
}else if(operator === `-`){
    result = firstnumber-secondNumber
}else if(operator === `/`){
    result = firstnumber/secondNumber
}else if(operator === `*`){
    result = firstnumber*secondNumber
}

console.log(result.toFixed(2))
}


calculator(5,'+',10)
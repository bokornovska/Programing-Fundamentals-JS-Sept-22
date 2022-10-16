function sumFirstandLast(array){
let last = array.pop();
// lat last = array[array.length-1]
let first = array.shift();
// let first = array[0]

console.log(Number(first)+Number(last))

}

sumFirstandLast(['20', '30', '40'])
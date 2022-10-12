function smallestNumber (a,b,c){

    // if(b>=a && c>=a){
    //     console.log(a)
    // }else if(a>=b && c>=b){
    //     console.log(b)
    // }else if(a>=c && b>=c){
    //     console.log(c)
    // }
let smallestNumber = Math.min(a,b,c);
return smallestNumber;
}

console.log(smallestNumber(2,8,2))
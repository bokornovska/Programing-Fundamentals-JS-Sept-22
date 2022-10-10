function repeatString (string, n){

    let buffer = ``;

    for(a=0;a<n;a++){
        buffer+=string
    }
    return buffer;

}

console.log(repeatString("abc", 3))
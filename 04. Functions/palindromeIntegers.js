function palindromeIntegers(input){

for(let el of input){
    
    // взимаме всеки елемент и го превръщаме в стринг
    let current = String(el); 
    
    // .split(string->array) // .reverse(обръщаме масива) //.join (обратно в стринг) 
    // .reverse работи само върху масив
    
    let reversed = String(el).split(``).reverse().join(``);
    
    if(current == reversed){
        console.log(`true`)
    }else{
        console.log(`false`)
    }
}
}

palindromeIntegers([123,323,421,121])
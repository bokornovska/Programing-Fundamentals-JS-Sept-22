function cutAndReverse(input){

    let reverced = input.split(``).reverse().join(``);
    let sliceOne = reverced.slice(reverced.length/2);
    let sliceTwo = reverced.slice(0, reverced.length/2);
    
    console.log(sliceOne)
    console.log(sliceTwo)
    

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
console.log(`*************`);
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')
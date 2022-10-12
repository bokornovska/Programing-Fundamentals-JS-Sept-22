function loadingBar (number){

    let completed = `%`.repeat(number/10);
    let incomplete = `.`.repeat(10-number/10);

   if(incomplete.length == 0){
    console.log(`100% Complete!`);
    console.log(`[${completed}]`)
   }else{
    console.log(`${number}% [${completed}${incomplete}]`)
    console.log(`Still loading...`)
   }


}

loadingBar(50)
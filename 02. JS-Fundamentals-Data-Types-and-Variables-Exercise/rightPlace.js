function rightPlace(firstString, char, secondString){

   let res = firstString.replace('_', char);

   if(res == secondString){
    console.log(`Matched`)
   }else{
    console.log(`Not Matched`)
   }

}

rightPlace('Str_ng', 'I', 'Strong')
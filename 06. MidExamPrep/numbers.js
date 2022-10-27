function numbers (numbers){

    let array =numbers.split(` `).map(Number);
    let sum = 0;
    let result = [];

    for(i=0;i<array.length;i++){
        sum+=array[i]
    }

  let average = sum/array.length;

  for(let j=0;j<array.length;j++){
    if(array[j]>average){
        result.push(array[j])
    }
  }

let sortedArray = result.sort((a,b) => b-a).slice(0,5)

if(sortedArray.length>0){
    console.log(sortedArray.join(` `))

}else{
    console.log(`No`)
}

}

numbers ('1')
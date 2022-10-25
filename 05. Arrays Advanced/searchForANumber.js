function searchForANumber (integers, array){

    let countToTake = array[0];
    let countToDelete = array[1];
    let theNumber = array[2];

    let slicedIntegers = integers.slice(0,countToTake);
    let integersAfterDelete = slicedIntegers.slice(countToDelete);

   
    let count = 0;

    for(let i = 0;i<=integersAfterDelete.length; i++){
        if(integersAfterDelete[i] == theNumber){
            count++;
        }
    }
    
    console.log(`Number ${theNumber} occurs ${count} times.`)


}

// The first number represents the number of elements you have to take from the first array (starting from the first one).
// The second number represents the number of elements you have to delete from the numbers you took (starting from the first one). 
// The third number is the number we search in our collection after the manipulations. 
// As output print how many times that number occurs in our array in the following format: 
// "Number {number} occurs {count} times."

searchForANumber([5, 2, 3, 4, 1, 6],    [5, 2, 3])
searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5])
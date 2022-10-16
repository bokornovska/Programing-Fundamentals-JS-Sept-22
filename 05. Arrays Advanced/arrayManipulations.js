function arrayManipulations(array){

    let currentArray = array.shift().split(` `).map(Number);


    for(let i=0;i<array.length;i++){

        let [command, firstNum, secondNum] = array[i].split(` `);

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case `Add`:
                currentArray.push(firstNum);
                break;
            case `Remove`:
                currentArray = currentArray.filter(currentArray => currentArray !== firstNum);
                break;
            case `RemoveAt`:
                currentArray.splice(firstNum,1);
                break;
            case `Insert`:
                currentArray.splice(secondNum,0,firstNum);
                break;
        }
    }
  
console.log(currentArray.join(` `))
}

// ⦁	Add {number}: add a number to the end of the array
// ⦁	Remove {number}: remove all occurrences of a particular number from the array
// ⦁	RemoveAt {index}: removes number at a given index
// ⦁	Insert {number} {index}: inserts a number at a given index

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])
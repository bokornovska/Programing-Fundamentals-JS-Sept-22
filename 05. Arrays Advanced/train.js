function train (array){

    let passangersInTrainArray = array.shift().split(` `).map(Number);

    let maxCapacity = +array.shift();

    for(i=0;i<array.length;i++){

        let commandNum = array[i].split(` `)
        
        if(commandNum[0] == `Add`){
            passangersInTrainArray.push(Number(commandNum[1]))
        }else{

            for(j=0;j<passangersInTrainArray.length;j++){
                if((Number(commandNum[0])+passangersInTrainArray[j]) <= maxCapacity){
                    passangersInTrainArray[j]+=Number(commandNum[0]);
                    break;
                }
            }
        }
    }

console.log(passangersInTrainArray.join(` `))
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])
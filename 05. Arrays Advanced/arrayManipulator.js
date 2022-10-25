function arrayManipulator(nums, commands) {
  for (let i = 0; i < commands.length; i++) {
    let currentVelues = commands[i].split(` `);
    let currentCommand = currentVelues.shift();
    currentVelues = currentVelues.map(Number);

    let sumPairs = 0;
    let pairsOfSumNum = [];

    switch (currentCommand) {
      case `add`:
        let indexToAdd = currentVelues[0];
        let elementToAdd = currentVelues[1];
        nums.splice(indexToAdd,0,elementToAdd);
        break;
      case `addMany`:
        let indexToAddMany = currentVelues.shift();
        nums.splice(indexToAddMany,0,[...currentVelues]);
        break;
      case `contains`:
        console.log(nums.indexOf(currentVelues[0]));
        break;
      case `remove`:
        let indexToRemove = currentVelues[0];
        nums.splice(indexToRemove,1);
        break;
      case `shift`:
        for(let i = 0; i<currentVelues[0];i++){
            nums.push(nums.shift());
        }
        break;
      case `sumPairs`:
        if(nums.length%2 !== 0){
            nums.push(0);
        }
        for(let j = 0; j<nums.length;i+=2){
            sumPairs = nums[j]+nums[j+1];
            pairsOfSumNum.push(sumPairs);
        }
        nums = [...pairsOfSumNum];
        break;
      case `print`:
        console.log(`[ ${nums.join(`, `)} ]`)
        break;
    }
  }
}

arrayManipulator(
    [1, 2, 3, 4, 5],
    ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);

function treasureHunt (array){

    let treasure = array.shift().split(`|`);
    let total = 0;
     
    for(let i = 0;i<array.length;i++){
        let commands = array.slice()[i].split(" ");
        let command = commands.shift();
        let newTreasure = commands;

        
        switch (command) {
            case `Yohohoo`:
                break;

            case `Loot`:
                for(let j=0;j<newTreasure.length;j++)
              if (!treasure.includes(newTreasure[j])) {
                treasure.unshift(newTreasure[j]);
              }
              break;

            case `Drop`:
                let dropped = treasure.splice(newTreasure, 1);
                treasure.push(...dropped);
              break;

            case `Steal`:
                let stealedTresure = treasure.slice(-newTreasure);
                treasure.splice(-newTreasure);
                console.log(stealedTresure.join(', '));
                break;
          }
    }
    
    total = treasure.reduce((sum, treasure) => sum + treasure.length, 0) / treasure.length;

    if (treasure.length > 0) {
        console.log(`Average treasure gain: ${total.toFixed(2)} pirate credits.`)
    } else {
        console.log("Failed treasure hunt.")
    }
}

treasureHunt ((["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"]))
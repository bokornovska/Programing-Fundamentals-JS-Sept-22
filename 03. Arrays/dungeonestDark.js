function dungeonestDark (arr){

    let dungen = arr[0].split('|');
    let health = 100;
    let coins = 0;
    let totalCoins = 0;

    let room = 0;

    // console.log(dungen);

    for(let i = 0; i < dungen.length;i++){
        let currentRoom = dungen[i].split(' ');
        let command = currentRoom[0];
        let num = Number(currentRoom[1]); 
        room++;

        if(command === 'potion'){

                    if (health + num > 100) {
                      num = 100 - health;
                      health = 100;
                    } else
                    {
                      health += num;
                    }
                    console.log(`You healed for ${num} hp.`);
                    console.log(`Current health: ${health} hp.`);
             
        }else if(command === 'chest'){

                    coins = Number(num);
                    totalCoins += Number(num);
                    console.log(`You found ${coins} coins.`);
             
                  }else{
                    health -= Number(num);
                    if(health > 0){
                      console.log(`You slayed ${command}.`);
                    }else{
                      console.log(`You died! Killed by ${command}.`);
                      console.log(`Best room: ${room}`);
                      return;
                    }
                   
                  }           
              }
              
                console.log(`You've made it!`);
                console.log(`Coins: ${totalCoins}`);
                console.log(`Health: ${health}`); 
            }
    // if potion -console.log( `You healed for {healing-number} hp.`)
                // conseol.log(`Current health: {number} hp.`)

    //    if chest -  `You found {coins} coins.`

    // if monster - if health>0 - `You slayed {monster-name}.`
        // if health<0 - `You died! Killed by {monster-name}.` 
                // print best room - `Best room: {room}`.
        // if not killed - "You've made it!"
                // "Coins: {coins}"
                // "Health: {health}"





dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
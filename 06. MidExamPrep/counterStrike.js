function counterStrike (input){

    let health = Number(input.shift());
    let battleCount = 0;

    for (const commands of input) {
        if (commands !== 'End of battle') {
            let energy = Number(commands);
            if (health - energy < 0) {
                console.log(`Not enough energy! Game ends with ${battleCount} won battles and ${health} energy`);
                return;
            }
            health -= energy;
            battleCount++;
        } else {
            console.log(`Won battles: ${battleCount}. Energy left: ${health}`);
        }
        if (battleCount % 3 === 0) {
            health += battleCount;
        }
    }

}

counterStrike((["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"]))
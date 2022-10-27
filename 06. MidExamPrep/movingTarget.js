function movingTarget(array){

    let targets = array.shift().split(` `).map(Number);

    // for(let i=0;i<array.length;i++){
    while(array.length>0){  

        let command = array.shift();

        let currentCommand = command.split(' ')[0];

        if(currentCommand === `Shoot`){

            let indexOfShoot = Number(command.split(` `)[1]);
            let powerOfShoot = Number(command.split(` `)[2]);
            
            if (indexOfShoot >= 0 && indexOfShoot < targets.length) {
                targets[indexOfShoot] -= powerOfShoot;
                if (targets[indexOfShoot] <= 0) {
                  targets.splice(indexOfShoot, 1);
                }
            }

        }else if(currentCommand === `Add`){

            let indexOfAdd = Number(command.split(` `)[1]);
            let value = Number(command.split(` `)[2]);

            if (indexOfAdd < 0 || indexOfAdd >= targets.length) {
                console.log(`Invalid placement!`);
            } else {
                  targets.splice(indexOfAdd, 0, value);
              }

        }else if(currentCommand === `Strike`){

            let indexOfStrice = Number(command.split(" ")[1]);
            let radius = Number(command.split(" ")[2]);

            if (indexOfStrice >= 0 && indexOfStrice < targets.length) {
                if (indexOfStrice - radius >= 0 && indexOfStrice + radius < targets.length){
                  targets.splice(indexOfStrice - radius,radius + radius + 1);
                } else {
                  console.log(`Strike missed!`);
                }
              }
        }else if(currentCommand === `End`){
            break;
        }

    }
console.log(targets.join(`|`))

}

movingTarget((["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"]))

movingTarget((["1 2 3 4 5",
"Strike 0 1",
"End"]))
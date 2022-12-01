function pirates (input){

    let myObj = {}
    let indexToStart = 0;

   for(let i=0;i<input.length;i++){
    currentLine = input[i];

    if(currentLine !== "Sail"){
        let [town, population, gold] = currentLine.split(`||`);
        currentLine = input[i];

        if(!myObj.hasOwnProperty(town)){
            myObj[town] = [Number(population), Number(gold)];
        }else{
            myObj[town][0] += Number(population);
            myObj[town][1] += Number(gold);
        }
    }else{
        indexToStart = i;
        break;
    }
    
   }

   for(let i = indexToStart+1;i<input.length;i++){
    currentLine = input[i];
    if(currentLine !== "End"){
        let [command, town, first, second] = currentLine.split(`=>`);
        
        switch (command) {
            case "Plunder":
                myObj[town][0] = myObj[town][0] - Number(first);
                myObj[town][1] = myObj[town][1] - Number(second);

                console.log(`${town} plundered! ${second} gold stolen, ${first} citizens killed.`);

                if(myObj[town][0]<=0 || myObj[town][1]<=0){
                    delete myObj[town];
                    console.log(`${town} has been wiped off the map!`)
                }
                break;
            case "Prosper":

                if(first<0){
                    console.log("Gold added cannot be a negative number!")
                }else{
                    myObj[town][1]+=Number(first);
                    let totalGold = myObj[town][1]
                    console.log(`${first} gold added to the city treasury. ${town} now has ${totalGold} gold.`)
                }
                break;
    
        }
    }
   }
   let count = Object.keys(myObj).length;
//    console.log(count)

   if(count<=0){
    console.log("Ahoy, Captain! All targets have been plundered and destroyed!")
   }else{
       console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);
   }

for (const [key,value] of Object.entries(myObj)) {
    console.log(`${key} -> Population: ${value[0]} citizens, Gold: ${value[1]} kg`)
}
}

pirates(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])
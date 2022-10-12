function carWash(command){

    let cleanOrDurty = 0;

    for(let i= 0;i<command.length;i++){
        if(command[i] == `soap`){
            cleanOrDurty+=10
        }else if(command[i] == `water`){
            cleanOrDurty = cleanOrDurty+cleanOrDurty*0.20;
        }else if(command[i] == `vacuum cleaner`){
            cleanOrDurty = cleanOrDurty+cleanOrDurty*0.25;
        }else if(command[i] == `mud`){
            cleanOrDurty = cleanOrDurty-cleanOrDurty*0.10;
        }

    }
    console.log(`The car is ${cleanOrDurty.toFixed(2)}% clean.`)
    
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
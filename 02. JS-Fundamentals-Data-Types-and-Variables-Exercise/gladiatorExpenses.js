function gladiatorExpenses(lostFightCount, helmetPrice, swordPrice, shieldPrice, armorPrice){

let brokenShields = 0;
let gladiatorExpenses = 0;

for(let currentFight = 1; currentFight<=lostFightCount;currentFight++){
    if(currentFight%2 === 0){
        gladiatorExpenses+=helmetPrice
    }

    if(currentFight%3 ===0){
        gladiatorExpenses+=swordPrice
    }

    if(currentFight%2 === 0 && currentFight%3 ===0){
        gladiatorExpenses+=shieldPrice;
        brokenShields++
        if(brokenShields%2===0){
            gladiatorExpenses+=armorPrice
        }
    }
    
}

console.log(`Gladiator expenses: ${gladiatorExpenses.toFixed(2)} aureus`)
}

gladiatorExpenses(7,2,3,4,5)
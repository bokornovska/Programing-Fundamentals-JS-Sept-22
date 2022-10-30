function softUniReception (array){

let answersPerHour = Number(array[0])+Number(array[1])+ Number(array[2]);
let studentsCount = array[3];
let neededHours = 0;


while(studentsCount>0){
    studentsCount-=answersPerHour;
    neededHours++;

    if(neededHours%4 == 0){
        neededHours++;
    }
}

console.log(`Time needed: ${neededHours}h.`);


}

softUniReception (['5','6','4','20'])
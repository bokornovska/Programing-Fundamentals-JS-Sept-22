function piccolo(input){

    let parkingList = new Map();

    let fullList = input.map(x => x.split(`, `));

    fullList.forEach(element => {
        const command = element[0];
        const car = element[1];

        if(command === "IN"){
            parkingList.set(car, command)
        }else if(command === "OUT"){
            parkingList.delete(car);
        }

    });

    let sortedNumbers = Array.from(parkingList).sort((a,b) => a[0].localeCompare(b[0]));

    if(sortedNumbers.length === 0){
        console.log("Parking Lot is Empty")
    }

    sortedNumbers.forEach((car) => console.log(car[0]))
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])
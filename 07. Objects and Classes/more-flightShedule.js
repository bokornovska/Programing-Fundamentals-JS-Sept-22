function flightShedule(data){

    let allFlights = data.shift();
    let changedStatuses = data.shift();
    let finalFlightStatus = data.toString();

    // console.log(allFlights);
    // console.log(changedStatuses);
    // console.log(finalFlightStatus);

    let flightsObject = {};
    let canceledFlights = {};


    for(let line of allFlights){
       let lineArray = line.split(` `);
       let name = lineArray.shift();
       let destination = lineArray.join(` `);

       let flightStatus = "Ready to fly"

        flightsObject[name] = {
        Destination: destination,
        Status: flightStatus
       };
    }

    for(let line of changedStatuses){
        let [name, status] = line.split(` `);

        if(flightsObject.hasOwnProperty(name)){
            flightsObject[name].Status = status;
        }
    }

    for(let status in flightsObject){
        if (flightsObject[status].Status === finalFlightStatus){
            console.log(flightsObject[status]);
        }
    }

    // console.table(flightsObject);

}

flightShedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
])

console.log(`_________________`)
flightShedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
])
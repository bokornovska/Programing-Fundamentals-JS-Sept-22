function meetings (data){

    let result = {}
    for (const line of data) {
        let [day, name] = line.split(` `);
        
        if(result.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`)
        }else{
            result[day] = name;
            console.log(`Scheduled for ${day}`)
        }
    }

    for(let[key, velue] of Object.entries(result)){
        console.log(`${key} -> ${velue}`)
    }
}

// Scheduled for Monday
// Scheduled for Wednesday
// Conflict on Monday!
// Scheduled for Friday
// Monday -> Peter
// Wednesday -> Bill
// Friday -> Tim

meetings (['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])
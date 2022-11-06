function aMinerTask(data){

    let dataLength = data.length;

    let objResources = {};

    
    for(let i=0;i<dataLength;i+=2){
        let resource = data[i];
        let quantity = Number(data[i + 1]);
        
        if(!objResources.hasOwnProperty(resource)){
            objResources[resource] = 0;
        }

        objResources[resource] += quantity;

    }
    for(let item in objResources){
    console.log(`${item} -> ${objResources[item]}`)
    }


}

aMinerTask([
    'Gold',    '155',
    'Silver',    '10',
    'Copper',    '17'
    ])

aMinerTask([
    'gold',    '155',
    'silver',    '10',
    'copper',    '17',
    'gold',    '15'
    ])
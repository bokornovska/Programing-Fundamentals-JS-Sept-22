function towns (input){

// let currentTown = {};

// for (const city of input) {
    
//     let cityElements = city.split(` | `);
//     let townName = cityElements[0];
//     let townLatitude = Number(cityElements[1]);
//     let townLongtitude = Number(cityElements[2]);

//     currentTown.town = townName;
//     currentTown.latitude = townLatitude.toFixed(2);
//     currentTown.longitude = townLongtitude.toFixed(2);

//     console.log(currentTown)

// }

let townInfo = {};

for (const line of input) {

    let [townName, latitude, longitude] = line.split(` | `);
    

    townInfo.town = townName;
    townInfo.latitude = Number(latitude).toFixed(2);
    townInfo.longitude = Number(longitude).toFixed(2);
    
    console.log(townInfo)
}

}

towns(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625'])
function destinationMapper(str){

    let pattern = /(=|\/)(?<location>[A-Z][A-Za-z]{2,})\1/gm;
    let points = 0;
    let destinations = [];
 
    let found = str.match(pattern);

    if(found){
        found.forEach ( (el,i) => {
            el = el.substring(1,(el.length-1));
            points+=el.length;
            destinations.push(el)
        });
    }
    
        console.log(`Destinations: ${destinations.join(", ")}`);
        console.log(`Travel Points: ${points}`);
    

}

function destinationMap(string) {
 
    let pattern = /(=|\/)(?<stop>[A-Z][A-Za-z]{2,})\1/g;
                //  @"(=|\/)(?<location>[A-Z][A-Za-z]{2,})\1";
    let allStops = string.matchAll(pattern);
    let points = 0;
    let resultStops = [];
    for (let currentStop of allStops) {
        resultStops.push(currentStop.groups.stop);
        points += Number(currentStop.groups.stop.length);
    }
    console.log(`Destinations: ${resultStops.join(', ')}`);
    console.log(`Travel Points: ${points}`);
 
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
console.log(`______________________`);
destinationMapper("ThisIs some InvalidInput");
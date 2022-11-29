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

function destinationMapper (input){
 
    let pattern = /(=|\/)(?<location>[A-Z][A-Za-z]{2,})\1/g
     
    let points = 0;
    let matches = pattern.exec(input);
    let locationsArray = []
     
    while(matches !== null){
     
        let location = matches.groups.location;
        locationsArray.push(location);
        points += location.length;
     
        matches = pattern.exec(input);
    }
    console.log(`Destinations: ${locationsArray.join(", ")}` );
    console.log(`Travel Points: ${points}`)
    }
     
    destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
     
    destinationMapper("ThisIs some InvalidInput")




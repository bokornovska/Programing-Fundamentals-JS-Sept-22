function destinationMapper(input){

    let pattern = /(=|\/)(?<location>[A-Z][A-Za-z]{2,})\1/gm;
    let count = 0;
    let ourCity = [];
 
    if (pattern.test(input)) {
        const ourDest = input.match(pattern);
 
        ourDest.forEach(input => {
            count += (input.length - 2);
            ourCity.push(input.slice(1, (input.length - 1)));
 
        });
    }
    
        console.log(`Destinations: ${ourCity.join(", ")}`);
        console.log(`Travel Points: ${count}`);
    

}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
console.log(`______________________`);
destinationMapper("ThisIs some InvalidInput");
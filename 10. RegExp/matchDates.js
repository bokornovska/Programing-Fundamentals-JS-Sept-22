function matchDates(input){

    let pattern = /\b(?<day>[0-9][0-9])([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>[0-9]{4})\b/gm;

    let validDate;

    while(validDate = pattern.exec(input)){
        let day = validDate.groups.day;
        let month = validDate.groups.month;
        let year = validDate.groups.year;

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
    }

}

matchDates(`13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016`)
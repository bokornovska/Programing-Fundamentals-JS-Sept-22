function demoMap(){

    let myMap = new Map();

    // Добавяне на стойности
    myMap.set(`name`,`Todor`);
    console.log(myMap);
    console.log(myMap.size) // големината на мап-а
    console.log(myMap.get(`name`)) // взимаме стойността на ключа
    console.log(myMap.has(`name`)) // проверяваме дали се съдържа даден ключ

    myMap.set(`age`, 30);
    console.log(myMap);

    myMap.delete(`age`); // изтриваме ключ
    console.log(myMap.has(`age`));

    // myMap.clear(); //изтрива целия мап
    // console.log(myMap)

    // myMap.entries() - array of [key,value]
    // myMap.keys() - returns all the keys
    // myMap.values() - returns all the values

    console.log(myMap.keys()) // връща мапитератор - обект
    console.log(Array.from(myMap.keys())) // връща масив от ключовете
}

demoMap()
function phoneBook (data){

    let phoneBooks = {};

    for (const line of data) {
        let splittedLine = line.split(` `);
        let name = splittedLine[0];
        let number = splittedLine[1];
        phoneBooks[name] = number;
    }
   
    for (const key in phoneBooks) {
        console.log(`${key} -> ${phoneBooks[key]}`)
    }

}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])
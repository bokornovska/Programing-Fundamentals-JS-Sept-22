function adressBook(data){

    let result = {};

    for (const line of data) {
        let [name, adress] = line.split(`:`);
        result[name] = adress;
    }
    
    let unsortedKey = Object.keys(result);
    let sortKey = unsortedKey.sort((a,b) => a.localeCompare(b));
    
    for(let key of sortKey){
        console.log(`${key} -> ${result[key]}`)
    }

    // let entries = Object.entries(result);
    // let sortEntries = entries.sort(([keyA, valueA], [keyB, valueB]) => {
    //     return keyA.localeCompare(keyB);
    // })

    // for (let [name,adress] of sortEntries) {
    //     console.log(`${name} -> ${adress}`)
    // }
}

adressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])
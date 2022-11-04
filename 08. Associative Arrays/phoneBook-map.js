function phoneBook (data){

    let phoneBooks = new Map ();

    for (const line of data) {
        let [name, phoneNumber] = line.split(` `);
        phoneBooks.set(name, phoneNumber)
    }
   
    for (let key of phoneBooks.keys()) {
        console.log(`${key} -> ${phoneBooks.get(key)}`)
    }

}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])
function employees (list){

    let listObject = {};

    // for (const person of input) {
    // //    console.log(person);
    //    listObject.name = person;
    //    listObject.number = person.length;
    //    console.log(`Name: ${listObject.name} -- Personal Number: ${listObject.number}`)
    // }

    // минаваме през всеки елемент на масива.
    list.forEach(person => {
        listObject[person] = person.length;
         
    });

    // for in - използва се когато искаме да минаваме по обекти
    for (const key in listObject) {
        console.log(`Name: ${key} -- Personal Number: ${listObject[key]}`)
            
    
    }

}

employees(['Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])
function companyUsers(data){

    let objCompany = {};

    for(let line of data){

        let companyName = line.split(` -> `)[0];

        let employeeId = line.split(` -> `)[1];

        if (!objCompany.hasOwnProperty(companyName)) {
            objCompany[companyName] = new Set();
        }
        objCompany[companyName].add(employeeId);

    }
    
    let sorted = Object.entries(objCompany);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    for (let elem of sorted) {
        console.log(elem[0]);
        for (let number of elem[1]) {
            console.log(`-- ${number}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])
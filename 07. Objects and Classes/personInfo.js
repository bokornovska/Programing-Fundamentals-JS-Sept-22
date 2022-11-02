function personInfo(firstName, lastName, age){

// let res = {
//     firstName: firstName,
//     lastName: lastName,
//     age: age
// };

let res = {
    firstName,
    lastName,
    age,
};
// res.firstName = firstName;
// res.lastName = lastName;
// res.age = age;

return res;
}

console.log(personInfo("Peter", "Pan", 15))
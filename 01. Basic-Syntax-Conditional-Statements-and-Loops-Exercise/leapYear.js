function leapYear(year){
let result = "no"

if((year%4 == 0 && year%100 !== 0)){
    result = "yes"
}
if(year%400 == 0){
    result = "yes"
}
console.log(result)
}

leapYear(4)
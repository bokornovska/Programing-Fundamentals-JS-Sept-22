function printCertificate (grade, names){
// Print Header
printHeader()
// Print Full Name
console.log(printFullName(names))
// Print Grade
formatGrade(grade)
}

function printFullName(names){
    return `${names[0]} ${names[1]}`;

}

function printHeader (){

    console.log(` ~~~-   {@}   -~~~`)
    console.log(` ~- Certificate -~`)
    console.log(` ~~~-  ~---~  -~~~`)
}

function formatGrade(grade){

    let description;
    let formatedGrade = grade.toFixed(2);

    if(grade<3){
        description = `Fail`;
        formatedGrade = 2;
    }else if(grade>=3 && grade<3.50){
        description = `Poor`;
    }else if(grade>=3.50 && grade<4.50){
        description = `Good`;
    }else if(grade>=4.50 && grade<5.50){
        description = `Very good`;
    }else if(grade>=5.50){
        description = `Excellent`
    }

    console.log(`${description} (${formatedGrade})`)
}

printCertificate(5.25, ['Peter', 'Carter']);

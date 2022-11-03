function schoolRegister(data){

    let objStudents = {};

    for(let line of data){

        tokens = line.split(`, `);

        let name = tokens[0].split(': ')[1];
        let grade = Number(tokens[1].split(': ')[1]) + 1;
        let averageScore = Number(tokens[2].split(': ')[1]);

    
        if (averageScore > 3) {
            let student = {name, averageScore};
            if (!objStudents.hasOwnProperty(grade)) {
                objStudents[grade] = [];
            }
            objStudents[grade].push(student);
        }
    }
    let sortedGrades = Object.keys(objStudents).sort((a,b) => a - b);

    for (let grade of sortedGrades) {
        let students = objStudents[grade];
        console.log(`${grade} Grade`);
        console.log(`List of students: ${students.map(s => s.name).join(', ')}`);
        console.log(`Average annual score from last year: ${average(students.map(s => s.averageScore)).toFixed(2)}`);
        console.log();
    }

    function average(arr) {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }
    
}

schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ])

    console.log(`_______________________________`);

    // schoolRegister([
    //     'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    //     'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    //     'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    //     'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    //     'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    //     'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    //     'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    //     ])
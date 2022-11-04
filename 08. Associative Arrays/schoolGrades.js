function schoolGrades(arr) {
    let schoolBook = new Map();
  
    for (let el of arr) {
      let studentGrades = el.split(' ');
      let studentName = studentGrades.shift();
  
      if (!schoolBook.has(studentName)) {
        schoolBook.set(studentName, studentGrades);
      } else {
        let updateGrade = schoolBook.get(studentName); // object
        for (let grade of studentGrades) {
          updateGrade.push(grade);
        }
        schoolBook.set(studentName, updateGrade);
      }
    }
    let sortedAlphabetically = Array.from(schoolBook).sort((a, b) => {
      return a[0].localeCompare(b[0]);
    });
  
    for (let [name, grade] of sortedAlphabetically) {
      let sumGrade = 0;
      for (currentGrade of grade) {
        sumGrade += Number(currentGrade);
      }
      let avg = sumGrade / grade.length;
      console.log(`${name}: ${avg.toFixed(2)}`);
    }
  }

 
  schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);
function bonusScoringSystem(array){

    let studentsCount = Number(array.shift());
    let lecturesCount = Number(array.shift());
    let initialBonus = Number(array.shift());

    let totalBonusArray = [];

    for(let i=0;i<studentsCount;i++){
        let attendances = array[i];

        let totalBonus = attendances/lecturesCount * (5+initialBonus);
        totalBonusArray.push(totalBonus)

    }
    
    totalBonusArray.sort((a,b) => a-b);
    totalBonusArray.map(Number);
    
    let maxBonusPoints = totalBonusArray.pop();

    console.log(`Max Bonus: ${Math.ceil(maxBonusPoints)}.`);

    let maxAttendances = array.sort((a,b) =>a-b).pop();


    console.log(`The student has attended ${maxAttendances} lectures.`)
}

// function solve(arr) {
//     let studentsCount = Number(arr.shift());
//     let allLectures = Number(arr.shift());
//     let initialBonus = Number(arr.shift());
//     let maxAtt = 0;
//     let maxBonus = 0;
//     for (let i = 0; i < studentsCount; i++) {
//         let attendances = arr[i];
//         let bonus = (attendances / allLectures) * (5 + initialBonus);
//         if (bonus >= maxBonus) {
//             maxBonus = bonus;
//             maxAtt = attendances;
//         }
//     }
//     console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
//     console.log(`The student has attended ${maxAtt} lectures.`);
// }



bonusScoringSystem(['10', '30', '14', 
'8','23', '27', '28', '15', '17', '25', '26', '5', '18'  ])
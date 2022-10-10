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

formatGrade(2.33)
formatGrade(3.33)
formatGrade(4.33)
formatGrade(5.33)
formatGrade(6.00)



// ⦁	< 3.00 - "Fail"
// ⦁	>= 3.00 and < 3.50 - "Poor"
// ⦁	>= 3.50 and < 4.50 - "Good"
// ⦁	>= 4.50 and < 5.50 - "Very good"
// ⦁	>= 5.50 - "Excellent"

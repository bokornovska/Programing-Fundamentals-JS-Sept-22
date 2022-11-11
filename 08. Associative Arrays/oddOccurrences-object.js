function oddOccurrences(words){

    let result = {};

    let allWords = words.split(` `).map(w => w.toLowerCase());
    

    for(let word of allWords){

        if(result[word] == undefined){
            result[word] = 1;
        }else{
            result[word]++;
        }

    }
    
    let finalResult = ``;

    for(let word of allWords){
        if(result[word] % 2 === 1){
            finalResult += `${word} `;
            delete result[word];
        }
    }

    console.log(finalResult)
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
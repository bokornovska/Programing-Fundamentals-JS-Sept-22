function modernTimes (text){

let sentance = text.split(` `);

for(const word of sentance){
    if(word.startsWith(`#`) && word.length>1){
        
        let flag = true;
        let wordLower = word.toLowerCase();

        for(let index = 1; index<wordLower.length; index++){
            if(wordLower.charCodeAt(index)<97 || wordLower.charCodeAt(index)>122){
                flag = false;
                break;
            }
        }
        
        if(flag){
            let newWord = word.slice(1)
            console.log(newWord)
        }
        
    }
}
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')
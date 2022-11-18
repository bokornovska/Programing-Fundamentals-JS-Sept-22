function revealWords(words, text){

let keyWords = words.split(`, `);
// console.log(keyWords);

let textArr = text.split(` `);
// console.log(textArr);

for(let element of keyWords){

    for(let word of textArr){
        if(word.includes(`*`) && word.length === element.length){
            text = text.replace(word,element)
        }
    }
}
console.log(text)


}

revealWords('great',
'softuni is ***** place for learning new programming languages');

console.log(`_______________________`);

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');
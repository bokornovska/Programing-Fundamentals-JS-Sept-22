function emojiDetector(input){

let text = input.shift();

let treshHold = 1;
let emojiCount = 0;
let coolEmojies = [];

let digits = text.match(/\d/g);

for (const digit of digits) {
    let number = Number(digit);
    treshHold*=number;
}
let pattern = /(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/gm
let emojiMatches = text.matchAll(pattern);

for (let emojiMatch of emojiMatches) {
    let emoji = emojiMatch[0];
    let emojiName = emojiMatch.groups.name;
    emojiCount++;

    let emojiCoolnes = 0;
    for (let i = 0; i<emojiName.length;i++) {
        emojiCoolnes+=emojiName.charCodeAt(i)
    }

    if(emojiCoolnes>=treshHold){
        coolEmojies.push(emoji)
    }

}

console.log(`Cool threshold: ${treshHold}`);
console.log(`${emojiCount} emojis found in the text. The cool ones are:`)
for (const emoji of coolEmojies) {
console.log(emoji)
    
}

}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
console.log('_________________')
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])
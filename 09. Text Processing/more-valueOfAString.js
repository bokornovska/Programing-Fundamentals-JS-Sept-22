function valueOfAString (input){

    let sum = 0;
    let word = input.shift().split('')
        .filter(x => x.charCodeAt(x) >= 65 && x.charCodeAt(x) <= 90 || x.charCodeAt(x) >= 97 && x.charCodeAt(x) <= 122);
    let instructions = input.shift().split('').join('');

    // console.log(word)
    // console.log(instructions)
 
    if (instructions === 'LOWERCASE') {
        word = word.filter(x => x.charCodeAt(x) >= 97 && x.charCodeAt(x) <= 122);
        for (let el of word) {
            el = el.charCodeAt();
            sum += el;
        }
    }
 
    if (instructions === 'UPPERCASE') {
        word = word.filter(x => x.charCodeAt(x) >= 65 && x.charCodeAt(x) <= 90);
        for (let el of word) {
            el = el.charCodeAt();
            sum += el;
        }
    }
    return console.log(`The total sum is: ${sum}`)

}

valueOfAString(['HelloFromMyAwesomePROGRAM','LOWERCASE'])